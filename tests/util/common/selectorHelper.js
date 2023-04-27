const pageGenerator = require('./pageGenerator');

module.exports = function (selector) {

	if (selector.indexOf('@') === 0) {
	    var parts = selector.slice(1).split('.');
		var page = pageGenerator(parts[0]);

		if (parts.length === 2) {
			if (global.env == 'ios') {
				if (page && page.elements.ios && page.elements.ios[parts[1]]) {
					return page.elements.ios[parts[1]];
				}
			} else if (global.env == 'android') {
				if (page && page.elements.android && page.elements.android[parts[1]]) {
		    		return page.elements.android[parts[1]];
				}
			} else {
				if (page && page.elements && page.elements[parts[1]]) {
					return page.elements[parts[1]];
				}
			}
		}
	}

	return selector;
};
