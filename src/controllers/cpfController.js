const { cpf } = require("cpf-cnpj-validator");

function validarCpf(req, res) {
  const { cpf: numero } = req.params;

  return res.json({
    cpf: numero,
    valido: cpf.isValid(numero)
  });
}

function gerarCpf(req, res) {
  return res.json({
    cpf: cpf.generate()
  });
}

module.exports = {
  validarCpf,
  gerarCpf
};