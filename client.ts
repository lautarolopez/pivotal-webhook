import { Application } from "https://deno.land/x/oak/mod.ts";
import { Router } from "https://deno.land/x/oak/mod.ts";
import { Response, Request, Body } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { DiscordMessage } from "./types/discord.ts";
import { load } from "https://deno.land/x/tiny_env/mod.ts";

await load();

const app = new Application();
const router = new Router();

const sendMessage = async ({
  request,
  response,
}: {
  request: Request;
  response: Response;
}) => {
  const body: Body = await request.body();
  const data = await body.value;
  const whurl: string | undefined = Deno.env.get("DISCORD_WEBHOOK");
  return data;
  // const msg: DiscordMessage = ;
  // if (whurl) {
  //   fetch(whurl, {
  //     method: "POST",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify(msg),
  //   });
  // }
};

router.post("/pivotal", sendMessage);

app.use(router.routes());
app.use(router.allowedMethods());
app.use(oakCors());

await app.listen({ port: 3000 });
