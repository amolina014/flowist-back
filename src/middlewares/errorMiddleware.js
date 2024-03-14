const { ErrorBase } = require('../services/errorService')



const errorMiddleware = (err, req, res, next) => {
	console.log(err)
	if (err instanceof ErrorBase) {
		return res.status(err.statusCode).json({
			error: {
				status: err.statusCode,
				message: err.message
			}
		});
	}

	return res.status(err.status || 500).json({
		error: {
			status: err.status || 500,
			message: err.message || 'Server internal error'
		}
	})
}

module.exports = { errorMiddleware };