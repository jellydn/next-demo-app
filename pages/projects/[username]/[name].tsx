import Giscus from "@giscus/react";
import { useFlags } from "@happykit/flags/client";
import {
  type GetServerSideProps,
  type InferGetServerSidePropsType,
} from "next";

import Project from "@/components/Project";
import { type AppFlags } from "@/flags.config";
import { getGithubUserRepository } from "@/services/github";
import { type GithubProject } from "@/services/types";

function ProjectName(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  const { flags } = useFlags<AppFlags>();

  return (
    <div className="container mx-auto">
      <Project repo={props.repo} />
      {flags?.["github-comment"] ? (
        <Giscus
          id="comments"
          repo="jellydn/next-demo-app"
          repoId="MDEwOlJlcG9zaXRvcnkzNjEzNTc0MTU="
          category="Ideas"
          categoryId="DIC_kwDOFYngZ84CQqyQ"
          mapping="specific"
          term="Welcome to @giscus/react component!"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="light"
          lang="en"
          loading="lazy"
        />
      ) : null}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<{
  repo: GithubProject;
}> = async (ctx) => {
  try {
    const repo = await getGithubUserRepository(
      String(ctx.query.username),
      ctx.query.name as string,
    );
    return {
      props: {
        repo,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};

export default ProjectName;
