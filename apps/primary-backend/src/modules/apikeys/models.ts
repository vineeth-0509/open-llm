import { t } from "elysia";

export namespace ApiKeyModel {
  export const createApiKeySchema = t.Object({
    name: t.String(),
  });
  export type createApiKeySchema = typeof createApiKeySchema.static;

  export const createApiKeyResponse = t.Object({
    id: t.String(),
    apiKey: t.String(),
  });
  export type createApiKeyResponse = typeof createApiKeyResponse.static;

  export const updateApiKeySchema = t.Object({
    id: t.String(),
    disabled: t.Boolean()
  });
  export type updateApiKeySchema = typeof updateApiKeySchema.static;

  export const updateApiKeyResponseSchema = t.Object({
    message: t.Literal("updated Api Key Successfully."),
  });
  export type updateApiKeyResponseSchema =
    typeof updateApiKeyResponseSchema.static;


  export const disableApiKeyFailedResponseSchema = t.Object({
    message: t.Literal("Updating api key unsuccessful"),
  });
  export type disableApiKeyFailedResponseSchema = typeof disableApiKeyFailedResponseSchema.static;  

  export const getApiKeysResponseSchema = t.Object({
    apiKeys: t.Array(
      t.Object({
        id: t.String(),
        name: t.String(),
        apiKeys: t.String(),
        lastUsed: t.Nullable(t.Date()),
        creditsConsumed: t.Number(),
        disabled: t.Boolean()
      }),
    ),
  });
  export type getApiKeysResponseSchema = typeof getApiKeysResponseSchema.static;

  export const deleteApiKeyResponseSchema = t.Object({
    message: t.Literal("Api Key deleted successfully"),
  });
  export type deleteApiKeyResponseSchema =
    typeof deleteApiKeyResponseSchema.static;
 
 
    export const deleteApiKeyFailedResponseSchema = t.Object({
    message: t.Literal("Api Key deleteion Failed"),
  });
  export type deleteApiKeyFailedResponseSchema =
    typeof deleteApiKeyFailedResponseSchema.static;
}
