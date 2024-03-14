


const tmpReq = (req, res) => {
	const { id, email } = req.user;
	res.json({ id, email })
}

module.exports = {
	tmpReq,
}