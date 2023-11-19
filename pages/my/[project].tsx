 
import { type GetStaticProps, type InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";

import Project from "../../components/Project";
import {
  getGithubUserRepositories,
  getGithubUserRepository,
} from "../../services/github";
import { type GithubProject } from "../../services/types";

function MyProject({
  repo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return <Project repo={repo} />;
}

export async function getStaticPaths() {
  const repositories = await getGithubUserRepositories(
    process.env.NEXT_PUBLIC_GITHUB_USERNAME
  );
  return {
    paths: repositories.map((project) => `/my/${project.name}`),
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps<{
  repo: GithubProject;
}> = async (ctx) => {
  try {
    const { params } = ctx;
    const repo = await getGithubUserRepository(
      process.env.NEXT_PUBLIC_GITHUB_USERNAME,
      params?.project as unknown as string
    );

    return {
      props: {
        repo,
      },
      revalidate: 1,
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};

export default MyProject;
