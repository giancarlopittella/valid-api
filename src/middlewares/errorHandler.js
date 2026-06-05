function errorHandler(error, req, res, next) {
  console.error(error);

  return res.status(500).json({
    erro: error.message
  });
}

module.exports = errorHandler;