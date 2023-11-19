import { DevTool } from "@hookform/devtools";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { type GetStaticProps } from "next";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import ProjectList from "@/components/ProjectList";

type FormValues = {
  username: string;
};

const schema = yup.object().shape({
  username: yup.string().required(),
});

function Projects() {
  const [username, setUsername] = useState("");

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (formData: FormValues) => {
    setUsername(formData.username);
  };

  return (
    <div className="container flex flex-col justify-center items-center mx-auto">
      <div
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1538582709238-0a503bd5ae04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)",
        }}
        className="w-full max-w-5xl h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
      />
      <div className="overflow-hidden -mt-24 bg-white rounded-lg shadow-md">
        <div className="justify-between items-center py-10 px-5 mx-auto text-center bg-white rounded-lg shadow-2xl">
          <div className="px-2 -mt-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="text-center">
                <h1 className="my-3 w-full text-3xl font-medium leading-loose text-grey-800">
                  Get Projects Information
                </h1>
                <div className="w-full text-center">
                  <div className="flex items-center p-1 pr-0 mx-auto max-w-sm">
                    <input
                      type="text"
                      {...register("username")}
                      placeholder="Your github profile"
                      className="flex-1 p-3 mr-2 rounded shadow appearance-none focus:outline-none text-grey-dark"
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
          <DevTool control={control} placement="top-left" />
        </div>
      </div>
      {username && <ProjectList username={username} />}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => ({
  props: {
    data: null,
  },
});

export default Projects;
