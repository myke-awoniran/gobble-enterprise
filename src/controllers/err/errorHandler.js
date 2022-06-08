function HttpErrHandler(err, req, res, next) {
   // if (err.name === 'JW')
   res.status(err.statusCode).json({
      status: err.status,
      error: {
         statusCode: err.statusCode,
         isOperational: err.isOperational,
         message: err.message,
         name: err.name,
      },
   });
}

module.exports = HttpErrHandler;
