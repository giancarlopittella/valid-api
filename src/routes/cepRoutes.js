const express = require("express");

const router = express.Router();

const {
  consultarCep
} = require("../controllers/cepController");

router.get("/:cep", consultarCep);

module.exports = router;