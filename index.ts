import { Application } from "https://deno.land/x/oak/mod.ts";
import { Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { Response, Request, Body } from "https://deno.land/x/oak/mod.ts";

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
  response.body = data;
};

router.post("/pivotal", sendMessage);

app.use(router.routes());
app.use(router.allowedMethods());
app.use(oakCors());

await app.listen({ port: 3000 });
