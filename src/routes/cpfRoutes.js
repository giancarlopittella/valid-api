const express = require("express");
const router = express.Router();

const {
  validarCpf,
  gerarCpf
} = require("../controllers/cpfController");

/**
 * @swagger
 * /validate/cpf/{cpf}:
 *   get:
 *     summary: Valida um CPF
 *     tags:
 *       - CPF
 *     parameters:
 *       - in: path
 *         name: cpf
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Resultado da validação
 */
router.get("/cpf/:cpf", validarCpf);



/**
 * @swagger
 * /validate/generate/cpf:
 *   get:
 *     summary: Gera um CPF válido
 *     tags:
 *       - CPF
 *     responses:
 *       200:
 *         description: CPF gerado com sucesso
 */
router.get("/generate/cpf", gerarCpf);

module.exports = router;