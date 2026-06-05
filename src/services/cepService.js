const axios = require("axios");

async function buscarCep(cep) {
  const { data } = await axios.get(
    `https://viacep.com.br/ws/${cep}/json/`
  );

  return data;
}

module.exports = {
  buscarCep
};