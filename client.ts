import { Application } from "https://deno.land/x/oak/mod.ts";
import { Router } from "https://deno.land/x/oak/mod.ts";
import { Response, Request, Body } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { DiscordMessage } from "./types/discord.ts";
import { PivotalTrackerActivity } from "./types/pivotal.ts";
import { formatMessage } from "./message.ts";
import { parse } from "https://deno.land/std/flags/mod.ts";
import { load } from "https://deno.land/x/denv@2.0.0/mod.ts";

await load("./.env");

const app = new Application();
const router = new Router();
const { args } = Deno;
const DEFAULT_PORT = 8000;
const argPort = parse(args).port;

const sendMessage = async ({
  request,
  response,
}: {
  request: Request;
  response: Response;
}) => {
  const body: Body = await request.body();
  const data: PivotalTrackerActivity = await body.value;
  const whurl: string | undefined = Deno.env.get("DISCORD_WEBHOOK");
  const msg: DiscordMessage | null = formatMessage(data);
  if (msg !== null) {
    if (whurl) {
      fetch(whurl + "?wait=true", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(msg),
      }).then((algo) => algo.json().then(console.log));
    }
    response.body = {
      status: msg !== null ? 200 : 400,
      body: msg !== null ? msg : "Internal server error",
    };
  }
};

router.post("/pivotal", sendMessage);

app.use(router.routes());
app.use(router.allowedMethods());
app.use(oakCors());

await app.listen({ port: argPort ? Number(argPort) : DEFAULT_PORT });
