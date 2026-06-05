const express = require("express");

const router = express.Router();

const {
  criarCliente,
  listarClientes,
  buscarCliente,
  atualizarCliente,
  deletarCliente
} = require("../controllers/clienteController");

/**
 * @swagger
 * components:
 *   schemas:
 *     Cliente:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         nome:
 *           type: string
 *         cpf:
 *           type: string
 *         email:
 *           type: string
 *         telefone:
 *           type: string
 *         cep:
 *           type: string
 *         cidade:
 *           type: string
 *         estado:
 *           type: string
 */

/**
 * @swagger
 * /clientes:
 *   get:
 *     summary: Lista todos os clientes
 *     tags:
 *       - Clientes
 *     responses:
 *       200:
 *         description: Lista de clientes
 */
router.get("/", listarClientes);

/**
 * @swagger
 * /clientes:
 *   post:
 *     summary: Cria um novo cliente
 *     tags:
 *       - Clientes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - cpf
 *               - email
 *               - telefone
 *               - cep
 *             properties:
 *               nome:
 *                 type: string
 *                 example: Gian Carlo
 *               cpf:
 *                 type: string
 *                 example: 52998224725
 *               email:
 *                 type: string
 *                 example: gian@email.com
 *               telefone:
 *                 type: string
 *                 example: 54999999999
 *               cep:
 *                 type: string
 *                 example: 99010000
 *     responses:
 *       201:
 *         description: Cliente criado com sucesso
 */
router.post("/", criarCliente);

/**
 * @swagger
 * /clientes/{id}:
 *   get:
 *     summary: Busca um cliente por ID
 *     tags:
 *       - Clientes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cliente encontrado
 *       404:
 *         description: Cliente não encontrado
 */
router.get("/:id", buscarCliente);

/**
 * @swagger
 * /clientes/{id}:
 *   put:
 *     summary: Atualiza um cliente
 *     tags:
 *       - Clientes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cliente atualizado
 */
router.put("/:id", atualizarCliente);

/**
 * @swagger
 * /clientes/{id}:
 *   delete:
 *     summary: Remove um cliente
 *     tags:
 *       - Clientes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Cliente removido com sucesso
 */
router.delete("/:id", deletarCliente);

module.exports = router;