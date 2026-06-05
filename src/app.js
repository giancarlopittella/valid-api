require("dotenv").config();

const express = require("express");

const clienteRoutes = require("./routes/clienteRoutes");
const cpfRoutes = require("./routes/cpfRoutes");
const cnpjRoutes = require("./routes/cnpjRoutes");
const cepRoutes = require("./routes/cepRoutes");

const errorHandler = require("./middlewares/errorHandler");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");

const app = express();

app.use(express.json());

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

app.use("/clientes", clienteRoutes);
app.use("/validate", cpfRoutes);
app.use("/validate", cnpjRoutes);
app.use("/cep", cepRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});