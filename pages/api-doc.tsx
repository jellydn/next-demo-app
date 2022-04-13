import dynamic from "next/dynamic";
import "swagger-ui-react/swagger-ui.css";

const SwaggerUI = dynamic<{ url: string }>(import("swagger-ui-react"), {
  ssr: false,
});

const ApiDoc = () => {
  return <SwaggerUI url="/api/doc" />;
};

export default ApiDoc;
