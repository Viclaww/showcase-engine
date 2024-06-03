/**
 * Error response middleware for 404 not found.
 *
 * @param {Object} req
 * @param {Object} res
 */
export function notFound(req, res) {
  res.status(404).json({
    code: HttpStatus.NOT_FOUND,
    message: "Ooops, route not found",
  });
}

/**
 * Error response middleware for handling all app errors except generic errors.
 *
 * @param  {Object}   err
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 */
// eslint-disable-next-line no-unused-vars
export function appErrorHandler(err, req, res, next) {
  if (err.code && typeof err.code === "number") {
    res.status(err.code).json({
      code: err.code,
      message: err.message,
    });
  } else {
    next(err);
  }
}
