import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "MS-EMAIL",
      version: "1.0.0",
      description:
        "Microservice for email based on hexagonal architecture in workspace project.",
    },
    components: {
      securitySchemes: {
        basicAuth: {
          type: "http",
          scheme: "basic",
        },
      },
    },
  },
  apis: ["src/infrastructure/http/routes/*.ts"],
  security: {
    basicAuth: [],
  },
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
