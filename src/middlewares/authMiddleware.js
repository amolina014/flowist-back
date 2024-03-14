const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
	// Se hace el split porque el estandar de HTTP indica que hay que enviar la info asi:
	// headers: { 'Authorization' : 'Bearer TOKEN'} entonces el split se queda solo con TOKEN
	const token = req.headers['authorization']?.split(' ')[1];

	if (!token) {
		return res.status(403).json({ error: 'Access denied: Authorization is needed' });
	}

	try {
		const decoded = jwt.decode(token, process.env.SECRET_KEY);
		req.user = decoded;
		next();
	} catch (err) {
		return res.status(401).json({ error: 'Invalid token or token has spired' });
	}
}


module.exports = {
	authMiddleware,
}