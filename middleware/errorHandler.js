const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "validation failed",
        messege: err.messege,
        stackTrace: err.stack,
      });
    case constants.NOT_FOUND:
      res.json({
        title: "not found",
        messege: err.messege,
        stackTrace: err.stack,
      });
    case constants.UNAUTHORIZED:
      res.json({
        title: "unauthorized",
        messege: err.messege,
        stackTrace: err.stack,
      });
    case constants.FORBIDDEN:
      res.json({
        title: "forbidden",
        messege: err.messege,
        stackTrace: err.stack,
      });
    case constants.SERVER_ERROR:
      res.json({
        title: "server error",
        messege: err.messege,
        stackTrace: err.stack,
      });

    default:
        console.log("no error found");
        break;
  }
};

module.exports = errorHandler;
