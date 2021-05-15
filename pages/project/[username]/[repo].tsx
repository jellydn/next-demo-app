import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { getGithubUserRepository } from "../../../services/github";

export interface GithubRepo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url: null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: License;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  permissions: Permissions;
  temp_clone_token: string;
  allow_squash_merge: boolean;
  allow_merge_commit: boolean;
  allow_rebase_merge: boolean;
  delete_branch_on_merge: boolean;
  network_count: number;
  subscribers_count: number;
}

export interface License {
  key: string;
  name: string;
  spdx_id: string;
  url: string;
  node_id: string;
}

export interface Owner {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface Permissions {
  admin: boolean;
  push: boolean;
  pull: boolean;
}

const Repo = ({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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

export const getServerSideProps: GetServerSideProps<{
  repo: GithubRepo;
}> = async (ctx) => {
  const { query } = ctx;

  const repo = await getGithubUserRepository(
    query.username as string,
    query.repo as string
  );

  return {
    props: {
      repo,
    },
  };
};

export default Repo;
