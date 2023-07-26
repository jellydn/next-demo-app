import { withSwagger } from "next-swagger-doc";

const swaggerHandler = withSwagger({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "NextJS Swagger Documentation",
      description: "Swagger API Documentation for NextJS - https://github.com/jellydn/next-swagger-doc",
      version: "0.1.0",
    },
  },
  apiFolder: "pages/api",
});
export default swaggerHandler();
