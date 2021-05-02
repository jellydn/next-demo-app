import { GetStaticProps } from "next";

import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import * as yup from "yup";

const ProjectLists = () => {
  return (
    <div className="flex items-center justify-center mt-4 overflow-hidden font-sans min-w-screen">
      <div className="w-full">
        <div className="bg-white rounded shadow-md">
          <table className="w-full table-auto min-w-max">
            <thead>
              <tr className="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
                <th className="px-6 py-3 text-left">Project</th>
                <th className="px-6 py-3 text-left">Client</th>
                <th className="px-6 py-3 text-center">Users</th>
                <th className="px-6 py-3 text-center">Status</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm font-light text-gray-600">
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="px-6 py-3 text-left whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width={24}
                        height={24}
                        viewBox="0 0 48 48"
                        style={{ fill: "#000000" }}
                      >
                        <path
                          fill="#80deea"
                          d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
                        />
                        <path
                          fill="#80deea"
                          d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
                        />
                        <path
                          fill="#80deea"
                          d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
                        />
                        <circle cx={24} cy={24} r={4} fill="#80deea" />
                      </svg>
                    </div>
                    <span className="font-medium">React Project</span>
                  </div>
                </td>
                <td className="px-6 py-3 text-left">
                  <div className="flex items-center">
                    <div className="mr-2">
                      <img
                        className="w-6 h-6 rounded-full"
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                      />
                    </div>
                    <span>Eshal Rosas</span>
                  </div>
                </td>
                <td className="px-6 py-3 text-center">
                  <div className="flex items-center justify-center">
                    <img
                      className="w-6 h-6 transform border border-gray-200 rounded-full hover:scale-125"
                      src="https://randomuser.me/api/portraits/men/1.jpg"
                    />
                    <img
                      className="w-6 h-6 -m-1 transform border border-gray-200 rounded-full hover:scale-125"
                      src="https://randomuser.me/api/portraits/women/2.jpg"
                    />
                    <img
                      className="w-6 h-6 -m-1 transform border border-gray-200 rounded-full hover:scale-125"
                      src="https://randomuser.me/api/portraits/men/3.jpg"
                    />
                  </div>
                </td>
                <td className="px-6 py-3 text-center">
                  <span className="px-3 py-1 text-xs text-purple-600 bg-purple-200 rounded-full">
                    Active
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
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="px-6 py-3 text-left">
                  <div className="flex items-center">
                    <div className="mr-2">
                      <img
                        className="w-6 h-6"
                        src="https://img.icons8.com/color/100/000000/vue-js.png"
                      />
                    </div>
                    <span className="font-medium">Vue Project</span>
                  </div>
                </td>
                <td className="px-6 py-3 text-left">
                  <div className="flex items-center">
                    <div className="mr-2">
                      <img
                        className="w-6 h-6 rounded-full"
                        src="https://randomuser.me/api/portraits/women/2.jpg"
                      />
                    </div>
                    <span>Anita Rodriquez</span>
                  </div>
                </td>
                <td className="px-6 py-3 text-center">
                  <div className="flex items-center justify-center">
                    <img
                      className="w-6 h-6 transform border border-gray-200 rounded-full hover:scale-125"
                      src="https://randomuser.me/api/portraits/men/1.jpg"
                    />
                    <img
                      className="w-6 h-6 -m-1 transform border border-gray-200 rounded-full hover:scale-125"
                      src="https://randomuser.me/api/portraits/women/2.jpg"
                    />
                    <img
                      className="w-6 h-6 -m-1 transform border border-gray-200 rounded-full hover:scale-125"
                      src="https://randomuser.me/api/portraits/men/3.jpg"
                    />
                  </div>
                </td>
                <td className="px-6 py-3 text-center">
                  <span className="px-3 py-1 text-xs text-green-600 bg-green-200 rounded-full">
                    Completed
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
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

type FormValues = {
  username: string;
};

const schema = yup.object().shape({
  username: yup.string().required(),
});

const Projects = () => {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (formData: FormValues) => {
    console.warn({
      formData,
    });
  };

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <div
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1538582709238-0a503bd5ae04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)",
        }}
        className="w-full h-64 max-w-5xl bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
      ></div>
      <div className="-mt-24 overflow-hidden bg-white rounded-lg shadow-md">
        <div className="items-center justify-between px-5 py-10 mx-auto text-center bg-white rounded-lg shadow-2xl">
          <div className="px-2 -mt-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="text-center">
                <h1 className="w-full my-3 text-3xl font-medium leading-loose text-grey-800">
                  Get Projects Information
                </h1>
                <div className="w-full text-center">
                  <div className="flex items-center max-w-sm p-1 pr-0 mx-auto">
                    <input
                      type="text"
                      {...register("username")}
                      placeholder="Your github profile"
                      className="flex-1 p-3 mr-2 rounded shadow appearance-none text-grey-dark focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="p-3 text-base font-semibold text-white bg-blue-600 rounded-md shadow-md hover:bg-indigo-600"
                    >
                      Submit
                    </button>
                  </div>
                  <div className="text-red-600">
                    <ErrorMessage errors={errors} name="username" />
                  </div>
                </div>
              </div>
            </form>{" "}
          </div>
          <DevTool control={control} />
        </div>
      </div>
      <ProjectLists />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};

export default Projects;
