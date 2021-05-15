import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { GithubProject } from "../../components/types";

import {
  getGithubUserRepository,
  getGithubUserRepositories,
} from "../../services/github";

const MyProjects = ({
  repo,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <section className="pb-32 text-gray-700 bg-gray-500">
      <div className="p-8 text-3xl text-center text-white title md:text-5xl ">
        <a href={repo.html_url} className="font-bold">
          💗 {repo.html_url}
        </a>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col items-center flex-1 p-8 mx-8 mb-8 bg-white rounded shadow-lg md:mb-0 md:w-1/3 sm:flex-initial">
          <img
            src={repo.owner.avatar_url}
            className="w-32 h-32 rounded-full "
            alt={repo.owner.login}
          />
          <h1 className="my-4 text-4xl text-indigo-500 ">{repo.full_name}</h1>
          <p className="px-8 mb-8 text-justify ">{repo.description}</p>
        </div>
        <div className="flex flex-col justify-between mx-8 md:mx-0 md:w-1/4 ">
          <div className="flex flex-col items-center p-4 mb-4 bg-white border-r-8 border-red-400 rounded shadow-lg md:mb-auto">
            <h2 className="font-bold ">Licence</h2>
            <p className="p-4 text-gray-600">{repo.license?.name}</p>
            <div className="flex justify-between ">
              <div className="px-4 py-1 mr-2 text-xs bg-gray-400 rounded-full pill">
                #{repo.license?.key}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 bg-white border-r-8 border-red-400 rounded shadow-lg">
            <h2 className="font-bold">Usage</h2>
            <p className="p-4 text-gray-600">git clone {repo.git_url}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const getStaticProps: GetStaticProps<{
  repo: GithubProject;
}> = async (ctx) => {
  const { params } = ctx;

  try {
    const repo = await getGithubUserRepository(
      process.env.NEXT_PUBLIC_GITHUB_USERNAME,
      params.project as string
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

export async function getStaticPaths() {
  const repositories = await getGithubUserRepositories(
    process.env.NEXT_PUBLIC_GITHUB_USERNAME
  );
  return {
    paths: repositories.map((project) => "/my/" + project.name),
    fallback: true,
  };
}

export default MyProjects;
