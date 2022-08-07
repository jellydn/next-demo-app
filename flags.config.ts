import { configure } from "@happykit/flags/config";

export type AppFlags = {
  "github-comment": boolean;
};

configure<AppFlags>({
  envKey:
    process.env?.NEXT_PUBLIC_FLAGS_ENVIRONMENT_KEY ??
    "flags_pub_development_339304767359550036",
  defaultFlags: {
    "github-comment": false,
  },
});
