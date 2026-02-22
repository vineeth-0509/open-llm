import { Elysia } from "elysia";
import { app as authApp } from "./modules/auth";
import { app as apiKeys } from "./modules/apikeys";
import { app as modelsApp } from "./modules/models";
import { app as paymentApp } from "./modules/payments";
export const app = new Elysia()
  .use(authApp)
  .use(apiKeys)
  .use(modelsApp)
  .use(paymentApp)
  


export type App = typeof app;
