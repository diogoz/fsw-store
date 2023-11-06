declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    NEXT_PUBLIC_STRIPE_KEY: string;
    STRIPE_SECRET_KEY: string;
    STRIPE_WEBHOOK_SECRET_KEY: string;
  }
}
