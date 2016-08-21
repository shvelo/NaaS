module.exports = function RandomLines(filename) {
	var self = this;
	this.lines = [""];
	fs.readFile(filename, 'utf-8', function(err, file) {
		if(err) {
			console.error(err);
			return;
		}
		self.lines.concat(file.split("\n"));
	});
}

RandomLines.prototype.next = function () {
	return this.lines[Math.random() * this.lines.length - 1];
}