import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const ApiDoc = () => {
  return <SwaggerUI url="/api/doc" />;
};

export default ApiDoc;
