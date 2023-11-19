import { type GetStaticProps } from "next";

const about = () => <div>About page</div>;

export const getStaticProps: GetStaticProps = async () => ({
    props: {
      data: null,
    },
  });

export default about;
