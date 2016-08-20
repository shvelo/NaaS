module.exports = function setHeaders(req, res, next) {
	if(Math.random() >= 0.85) {
		res.status(503).send("The server can't be bothered to process your request");
	} else {
		next();
	}
};