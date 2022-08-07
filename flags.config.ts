import { configure } from "@happykit/flags/config";

export type AppFlags = {
  "github-comment": boolean;
};

configure<AppFlags>({
  envKey: process.env.NEXT_PUBLIC_FLAGS_ENVIRONMENT_KEY,
  defaultFlags: {
    "github-comment": false,
  },
});
