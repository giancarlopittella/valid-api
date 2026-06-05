const { buscarCep } = require("../services/cepService");

async function consultarCep(req, res) {
  try {
    const { cep } = req.params;

    const endereco = await buscarCep(cep);

    return res.json(endereco);

  } catch {
    return res.status(500).json({
      erro: "Erro ao consultar CEP"
    });
  }
}

module.exports = {
  consultarCep
};