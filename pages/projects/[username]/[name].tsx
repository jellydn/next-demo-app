import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import Project from "../../../components/Project";
import { getGithubUserRepository } from "../../../services/github";
import { GithubProject } from "../../../services/types";

const ProjectName = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return (
    <div>
      <Project repo={props.repo} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{
  repo: GithubProject;
}> = async (ctx) => {
  try {
    const repo = await getGithubUserRepository(
      String(ctx.query.username),
      ctx.query.name as string
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
