const express = require("express");

const router = express.Router();

const {
  validarCnpj,
  gerarCnpj
} = require("../controllers/cnpjController");

/**
 * @swagger
 * /validate/cnpj/{cnpj}:
 *   get:
 *     summary: Valida um CNPJ
 *     tags:
 *       - CNPJ
 *     parameters:
 *       - in: path
 *         name: cnpj
 *         required: true
 *         schema:
 *           type: string
 *         description: CNPJ para validação
 *     responses:
 *       200:
 *         description: Resultado da validação
 */
router.get("/cnpj/:cnpj", validarCnpj);

/**
 * @swagger
 * /validate/generate/cnpj:
 *   get:
 *     summary: Gera um CNPJ válido
 *     tags:
 *       - CNPJ
 *     responses:
 *       200:
 *         description: CNPJ gerado com sucesso
 */
router.get("/generate/cnpj", gerarCnpj);

module.exports = router;