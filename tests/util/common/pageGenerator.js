var fs   = require('fs');
var path = require('path');

module.exports = function (page) {
    page = page + '.js';
    var pageObject = {};

    fs.readdirSync(global.pageObjectFile).forEach(file => {
        if (file === page) {
            var pageOjectFile = path.join(global.pageObjectFile,page);
            pageObject = require(pageOjectFile);
        }
    });
    return pageObject;
};
