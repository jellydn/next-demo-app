import { useQuery } from "react-query";
import Image from "next/image";
import Link from "next/link";

export interface GithubProject {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: null | string;
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
  homepage: null | string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: null | string;
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
  license: License | null;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
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

type ProjectListProps = {
  username: string;
};

export const ProjectList = ({ username }: ProjectListProps) => {
  const { isLoading, isError, error, data } = useQuery<Array<GithubProject>>(
    ["projects", username],
    () =>
      fetch(`/api/profile?username=${username}`).then(async (response) => {
        if (response.ok) {
          return response.json();
        }
        const result = await response.json();
        const error = new Error(
          result.message || response.statusText || "Unknown error"
        );
        throw error;
      })
  );

  if (isLoading) {
    return <p role="alert">Loading...</p>;
  }

  if (isError) {
    return <p role="alert">{(error as Error).message}</p>;
  }

  return (
    <div className="flex items-center justify-center mt-4 overflow-hidden font-sans min-w-screen">
      <div className="w-full">
        <div className="bg-white rounded shadow-md">
          <table className="w-full table-auto min-w-max">
            <thead>
              <tr className="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
                <th className="px-6 py-3 text-left">Project</th>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-center">Open Issue</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm font-light text-gray-600">
              {data.map((project) => {
                return (
                  <tr
                    key={project.id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="px-6 py-3 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <Link href={project.git_url}>
                          <a className="font-medium">{project.name}</a>
                        </Link>
                      </div>
                    </td>
                    <td className="px-6 py-3 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <Image
                            src={project.owner.avatar_url}
                            width="24"
                            height="24"
                            className="rounded-full"
                          />
                        </div>
                        <span>{project.full_name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-3 text-center">
                      <span className="px-3 py-1 text-xs text-purple-600 bg-purple-200 rounded-full">
                        {project.open_issues_count} issues
                      </span>
                    </td>
                    <td className="px-6 py-3 text-center">
                      <div className="flex justify-center item-center">
                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </div>
                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
