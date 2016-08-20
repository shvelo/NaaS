module.exports = function setHeaders(req, res, next) {
	res.set('Content-Type', 'text/plain');
	next();
};