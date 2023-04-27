var chai             = require('chai');
const selectorHelper = require('../common/selectorHelper');


/** Check if the given element is (not) visible */
function _isDisplayed(element, falseCase){

   element = selectorHelper(element);

   var isDisplayed = $(element).isDisplayed();

   if (Array.isArray(isDisplayed)) {
       isDisplayed = isDisplayed[0];
   }

   if (falseCase) {
       chai.expect(isDisplayed).to.not.equal(true, `Expected element "${element}" not to be visible`);
   } else {
       chai.expect(isDisplayed).to.equal(true, `Expected element "${element}" to be visible`);
   }
}

module.exports = {
   isDisplayed : _isDisplayed
};
