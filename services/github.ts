const GITHUB_URL = "https://api.github.com";

export async function getGithubUser(username: string) {
  // https://api.github.com/users/{USERNAME}
  const response = await fetch(`${GITHUB_URL}/users/${username}`, {
    method: "GET",
    headers: {
      Authorization: process.env.GITHUB_TOKEN,
    },
  });
  if (response.ok) {
    return response.json();
  } else {
    const result = await response.json();
    const error = new Error(result.message || response.statusText);
    throw error;
  }
}

export async function getGithubUserRepos(username: string, limit = 5) {
  // https://api.github.com/users/{USERNAME}/repos
  const response = await fetch(
    `${GITHUB_URL}/users/${username}/repos?per_page=${limit}`,
    {
      method: "GET",
      headers: {
        Authorization: process.env.GITHUB_TOKEN,
      },
    }
  );
  if (response.ok) {
    return response.json();
  } else {
    const result = await response.json();
    const error = new Error(result.message || response.statusText);
    throw error;
  }
}
