const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "ValidBR API",
      version: "1.0.0",
      description: "API para validação de dados brasileiros"
    }
  },
  apis: ["./src/routes/*.js"]
};

module.exports = swaggerJsDoc(options);