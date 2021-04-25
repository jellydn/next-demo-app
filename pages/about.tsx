import { GetStaticProps } from "next";

const about = () => {
  return <div>About page</div>;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};

export default about;
