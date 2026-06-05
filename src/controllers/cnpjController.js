const { cnpj } = require("cpf-cnpj-validator");

function validarCnpj(req, res) {
  const { cnpj: numero } = req.params;

  return res.json({
    cnpj: numero,
    valido: cnpj.isValid(numero)
  });
}

function gerarCnpj(req, res) {
  return res.json({
    cnpj: cnpj.generate()
  });
}

module.exports = {
  validarCnpj,
  gerarCnpj
};