import { configure } from "@happykit/flags/config";

export type AppFlags = {
  "github-comment": boolean;
};

const FLAG_KEY =
  process.env.NEXT_PUBLIC_FLAGS_ENVIRONMENT_KEY ??
  "flags_pub_development_339304767359550036";

configure<AppFlags>({
  envKey: FLAG_KEY,
  defaultFlags: {
    "github-comment": false,
  },
});
