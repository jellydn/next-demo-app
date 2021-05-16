import React, { ReactElement } from "react";

import { GithubProject } from "../services/types";

interface Props {
  repo: GithubProject;
}

function Project({ repo }: Props): ReactElement {
  return (
    <section className="pb-32 text-gray-700 bg-indigo-500">
      <div className="p-8 text-3xl text-center text-white title md:text-5xl ">
        <a href={repo.url} className="font-bold">
          💗 {repo.html_url}
        </a>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col items-center flex-1 p-8 mx-8 mb-8 bg-white rounded shadow-lg md:mb-0 md:w-1/3 sm:flex-initial">
          <img
            src={repo.owner.avatar_url}
            className="w-32 h-32 rounded-full "
            alt=""
          />
          <h1 className="my-4 text-4xl text-indigo-500 ">Description</h1>
          <p className="px-8 mb-8 text-justify ">{repo.description}</p>
        </div>
        <div className="flex flex-col justify-between mx-8 md:mx-0 md:w-1/4 ">
          <div className="flex flex-col items-center p-4 mb-4 bg-white border-r-8 border-red-400 rounded shadow-lg md:mb-auto">
            <h2 className="font-bold ">License</h2>
            <p className="p-4 text-gray-600">{repo.license?.name ?? "N/A"}</p>
            <div className="flex justify-between ">
              <div className="px-4 py-1 mr-2 text-xs bg-gray-400 rounded-full pill">
                #{repo.license?.key}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 bg-white border-r-8 border-red-400 rounded shadow-lg">
            <h2 className="font-bold">Usage</h2>
            <p className="p-4 text-gray-600">git clone {repo.git_url}</p>
            <div className="flex justify-between ">
              <div className="px-4 py-1 mr-2 text-xs bg-gray-400 rounded-full pill">
                #Express
              </div>
              <div className="px-4 py-1 mr-2 text-xs bg-gray-400 rounded-full pill">
                #TailwindCSS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
