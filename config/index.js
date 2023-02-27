import dotenv from 'dotenv';

const { env } = process;

dotenv.config({
  path: env.NODE_ENV ? `.env.${env.NODE_ENV}` : '.env',
});

const config = Object.freeze({
  APP_ENV: env.NODE_ENV || 'production',
  APP_DEBUG: env.APP_DEBUG === 'true' || false,
  APP_URL: env.APP_URL || null,
  APP_PORT: env.APP_PORT || null,
  APP_LANG: env.APP_LANG || 'id',
  APP_WEBHOOK_PATH: env.APP_WEBHOOK_PATH || '/webhook',
  APP_API_TIMEOUT: env.APP_API_TIMEOUT || 9000,
  APP_MAX_GROUPS: Number(env.APP_MAX_GROUPS) || 1,
  APP_MAX_USERS: Number(env.APP_MAX_USERS) || 5,
  APP_MAX_PROMPT_SENTENCES: Number(env.APP_MAX_PROMPT_SENTENCES) || 12,
  APP_MAX_PROMPT_TOKENS: Number(env.APP_MAX_PROMPT_TOKENS) || 1024,
  HUMAN_NAME: env.HUMAN_NAME || '',
  HUMAN_INIT_PROMPT: env.HUMAN_INIT_PROMPT || '',
  BOT_NAME: env.BOT_NAME || 'AI',
  BOT_INIT_PROMPT: env.BOT_INIT_PROMPT || '',
  BOT_TONE: env.BOT_TONE || '',
  BOT_DEACTIVATED: env.BOT_DEACTIVATED === 'true' || false,
  ERROR_TIMEOUT_DISABLED: env.ERROR_TIMEOUT_DISABLED === 'true' || false,
  VERCEL_ENV: env.VERCEL_ENV || null,
  VERCEL_TIMEOUT: env.VERCEL_TIMEOUT || env.APP_API_TIMEOUT,
  VERCEL_PROJECT_NAME:
    env.VERCEL_PROJECT_NAME || env.VERCEL_GIT_REPO_SLUG || null,
  VERCEL_ACCESS_TOKEN: env.VERCEL_ACCESS_TOKEN || null,
  VERCEL_DEPLOY_HOOK_URL: env.VERCEL_DEPLOY_HOOK_URL || null,
  OPENAI_TIMEOUT: env.OPENAI_TIMEOUT || env.APP_API_TIMEOUT,
  OPENAI_API_KEY: env.OPENAI_API_KEY || null,
  OPENAI_COMPLETION_MODEL: env.OPENAI_COMPLETION_MODEL || 'text-davinci-003',
  OPENAI_COMPLETION_TEMPERATURE:
    Number(env.OPENAI_COMPLETION_TEMPERATURE) || 0.9,
  OPENAI_COMPLETION_MAX_TOKENS: Number(env.OPENAI_COMPLETION_MAX_TOKENS) || 160,
  OPENAI_COMPLETION_FREQUENCY_PENALTY:
    Number(env.OPENAI_COMPLETION_FREQUENCY_PENALTY) || 0,
  OPENAI_COMPLETION_PRESENCE_PENALTY:
    Number(env.OPENAI_COMPLETION_PRESENCE_PENALTY) || 0.6,
  OPENAI_IMAGE_GENERATION_SIZE: env.OPENAI_IMAGE_GENERATION_SIZE || '256x256',
  LINE_TIMEOUT: env.LINE_TIMEOUT || env.APP_API_TIMEOUT,
  LINE_CHANNEL_ACCESS_TOKEN: env.LINE_CHANNEL_ACCESS_TOKEN || null,
  LINE_CHANNEL_SECRET: env.LINE_CHANNEL_SECRET || null,
  SERPAPI_TIMEOUT: env.SERPAPI_TIMEOUT || env.APP_API_TIMEOUT,
  SERPAPI_API_KEY: env.SERPAPI_API_KEY || null,
  SERPAPI_LOCATION: env.SERPAPI_LOCATION || 'Indonesia',
  SERPAPI_LANG: env.SERPAPI_LANG || 'lang_id',
});

export default config;
