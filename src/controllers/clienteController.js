const { PrismaClient } = require("@prisma/client");
const { cpf } = require("cpf-cnpj-validator");
const { buscarCep } = require("../services/cepService");

const prisma = new PrismaClient();

async function criarCliente(req, res, next) {
  try {
    const {
      nome,
      cpf: cpfCliente,
      email,
      telefone,
      cep
    } = req.body;

    if (!cpf.isValid(cpfCliente)) {
      return res.status(400).json({
        erro: "CPF inválido"
      });
    }

    const clienteExistente = await prisma.cliente.findFirst({
      where: {
        OR: [
          { cpf: cpfCliente },
          { email }
        ]
      }
    });

    if (clienteExistente) {
      return res.status(409).json({
        erro: "CPF ou email já cadastrado"
      });
    }

    const endereco = await buscarCep(cep);

    const cliente = await prisma.cliente.create({
      data: {
        nome,
        cpf: cpfCliente,
        email,
        telefone,
        cep,
        logradouro: endereco.logradouro,
        bairro: endereco.bairro,
        cidade: endereco.localidade,
        estado: endereco.uf
      }
    });

    return res.status(201).json(cliente);

  } catch (error) {
    next(error);
  }
}

async function listarClientes(req, res, next) {
  try {

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const nome = req.query.nome || "";

    const clientes = await prisma.cliente.findMany({
      where: {
        nome: {
          contains: nome,
          mode: "insensitive"
        }
      },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        createdAt: "desc"
      }
    });

    return res.json(clientes);

  } catch (error) {
    next(error);
  }
}

async function buscarCliente(req, res, next) {
  try {

    const { id } = req.params;

    const cliente = await prisma.cliente.findUnique({
      where: { id }
    });

    if (!cliente) {
      return res.status(404).json({
        erro: "Cliente não encontrado"
      });
    }

    return res.json(cliente);

  } catch (error) {
    next(error);
  }
}

async function atualizarCliente(req, res, next) {
  try {

    const { id } = req.params;

    const cliente = await prisma.cliente.update({
      where: { id },
      data: req.body
    });

    return res.json(cliente);

  } catch (error) {
    next(error);
  }
}

async function deletarCliente(req, res, next) {
  try {

    const { id } = req.params;

    await prisma.cliente.delete({
      where: { id }
    });

    return res.status(204).send();

  } catch (error) {
    next(error);
  }
}

module.exports = {
  criarCliente,
  listarClientes,
  buscarCliente,
  atualizarCliente,
  deletarCliente
};