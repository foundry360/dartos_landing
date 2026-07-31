type EnvKey =
  | "NEXT_PUBLIC_APP_NAME"
  | "NEXT_PUBLIC_APP_URL"
  | "NEXT_PUBLIC_ANALYTICS_ID";

function getEnv(key: EnvKey, fallback?: string): string {
  const value = process.env[key];

  if (value === undefined || value === "") {
    if (fallback !== undefined) {
      return fallback;
    }

    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
}

export const env = {
  appName: getEnv("NEXT_PUBLIC_APP_NAME", "DartOS"),
  appUrl: getEnv("NEXT_PUBLIC_APP_URL", "http://localhost:3000"),
  analyticsId: getEnv("NEXT_PUBLIC_ANALYTICS_ID", "G-17D0MXL5PK"),
  nodeEnv: process.env.NODE_ENV ?? "development",
  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",
} as const;
