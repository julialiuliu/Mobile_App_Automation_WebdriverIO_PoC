var {Then} = require('@cucumber/cucumber');

const checks   = require('../../util/check/checks.js'),
      actions   = require('../../util/action/actions.js');

Then(/^I expect element "([^"]*)?" is displayed$/, (element) => {
    actions.waitForVisible(element, false);
  });
