module.exports = function handler(req, res) {
	var query = req.query.q;

	if(!query) {
		return res.status(400).send("Missing query");
	}

	return res.status(200).send("Who gives a crap");
};