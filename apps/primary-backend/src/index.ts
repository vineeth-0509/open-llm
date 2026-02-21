import { Elysia } from "elysia";
import { app as authApp } from "./modules/auth";
import { app as apiKeys } from "./modules/apikeys";

const app = new Elysia().use(authApp).use(apiKeys).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);

/*
auth => signup, signin
api-key => create api key, get apikey, delete api key, disable api key.
model => get all supported models, their pricing, providers etc.
payment => rzp/stripe

*/
