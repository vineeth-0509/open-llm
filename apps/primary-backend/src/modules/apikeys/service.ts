import { prisma } from "db";

const API_KEY_LENGTH = 32;
const ALPHABET_SET =
  "zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP1234567890";
export abstract class ApiKeyService {
  static createRandomApiKey() {
    let suffix = "";
    for (let i = 0; i < API_KEY_LENGTH; i++) {
      suffix += ALPHABET_SET[Math.floor(Math.random() * ALPHABET_SET.length)];
    }
    return `sk-or-v1-${suffix}`;
  }

  static async createApiKey(
    name: string,
    userId: number,
  ): Promise<{
    id: string;
    apiKey: string;
  }> {
    const newApiKey = ApiKeyService.createRandomApiKey();
    const apiKey = await prisma.apiKey.create({
      data: {
        name,
        userId,
        apiKey: newApiKey,
      },
    });
    return {
      id: apiKey.id.toString(),
      apiKey: apiKey.apiKey,
    };
  }

  static async getApiKeys(userId: number) {
    const apiKeys = await prisma.apiKey.findMany({
      where: {
        userId: userId,
        deleted: false,
      },
    });
    return apiKeys.map((apiKey) => ({
      id: apiKey.id.toString(),
      name: apiKey.name,
      apiKeys: apiKey.apiKey,
      lastUsed: apiKey.lastUsed,
      creditsConsumed: apiKey.creditsConsumed,
      disabled: apiKey.disabled,
    }));
  }

  static async updateApiKeyDisabled(
    apiKeyId: number,
    userId: number,
    disabled: boolean,
  ) {
    await prisma.apiKey.update({
      where: {
        id: apiKeyId,
        userId,
      },
      data: {
        disabled,
      },
    });
  }

  // static async enableApiKey(apiKeyId: number, userId: number) {
  //   await prisma.apiKey.update({
  //     where: {
  //       id: apiKeyId,
  //       userId:userId
  //     },
  //     data: {
  //       disabled: false,
  //     },
  //   });
  // }

  static async delete(id: number, userId: number) {
    await prisma.apiKey.update({
      where: {
        id: id,
        userId: userId,
      },
      data: {
        deleted: true,
      },
    });
  }
}
