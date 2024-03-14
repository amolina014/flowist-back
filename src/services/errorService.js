

class ErrorBase extends Error {
	constructor(statusCode, message) {
		super(message);
		this.statusCode = statusCode;
	}
}

class NotFoundError extends ErrorBase {
	constructor(message = 'Resources not found') {
		super(404, message);
	}
}

class ValidationError extends ErrorBase {
	constructor(message = 'Invalid input data') {
		super(400, message);
	}
}

class CryptoError extends ErrorBase {
	constructor(message = 'Error while encrypting') {
		super(400, message);
	}
}

module.exports = {
	ErrorBase,
	NotFoundError,
	ValidationError,
	CryptoError,
}