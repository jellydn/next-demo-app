import Head from "next/head";
import styles from "../styles/Home.module.css";

import { useQuery } from "react-query";

import { GithubProject } from "../components/types";
import Link from "next/link";

export default function Home() {
  const { isLoading, isError, error, data } = useQuery<Array<GithubProject>>(
    ["projects", process.env.NEXT_PUBLIC_GITHUB_USERNAME],
    () =>
      fetch(
        `/api/profile?username=${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`
      ).then(async (response) => {
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
    <div className={styles.container}>
      <Head>
        <title>Next Demo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Next Demo App</h1>
        <ul>
          {data.map((project) => (
            <li key={project.id}>
              <Link href={`/my/${project.name}`}>
                <a> {project.full_name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
