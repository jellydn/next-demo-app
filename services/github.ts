import { type GithubProject } from "./types";

const GITHUB_URL = "https://api.github.com";

export async function getGithubUser(username?: string) {
  // https://api.github.com/users/{USERNAME}
  const response = await fetch(`${GITHUB_URL}/users/${username}`, {
    method: "GET",
    headers: process.env.GITHUB_TOKEN
      ? {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      }
      : {},
  });
  if (response.ok) {
    return response.json();
  }

  throw new Error(response.statusText);

}

export async function getGithubUserRepositories(
  username?: string,
  limit = 10
): Promise<GithubProject[]> {
  // https://api.github.com/users/{USERNAME}/repos
  const response = await fetch(
    `${GITHUB_URL}/users/${username}/repos?per_page=${limit}`,
    {
      method: "GET",
      headers: process.env.GITHUB_TOKEN
        ? {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        }
        : {},
    }
  );
  if (response.ok) {
    return response.json();
  }

  throw new Error(response.statusText);

}

export async function getGithubUserRepository(
  username?: string,
  projectName?: string
): Promise<GithubProject> {
  // https://api.github.com/repos/{USERNAME}/{NAME}
  const response = await fetch(
    `${GITHUB_URL}/repos/${username}/${projectName}`,
    {
      method: "GET",
      headers: process.env.GITHUB_TOKEN
        ? {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        }
        : {},
    }
  );
  if (response.ok) {
    return response.json();
  }


  throw new Error(response.statusText);
}
