const pageGenerator = require('./pageGenerator');

module.exports = function (command, page) {
	if (page.indexOf('@') === 0) {
		var parts = page.slice(1);
		var pageObject = pageGenerator(parts);
		if (pageObject && pageObject.commands && pageObject.commands[command]) {
	    	var commandNew = pageObject.commands[command];
			return commandNew;
		}
	}
	return command;
};
