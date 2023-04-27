var chai        = require('chai'),
    chaiWrapper = require('../util/common/pageWrapper'),
    expect      = chai.expect;

chai.use(chaiWrapper);

module.exports = {
    elements: {
        ios: {
            'txtEmail'                  : '//TODO',
            'txtPassword'               : '//TODO',
            'btnSignIn'                 : '//TODO',
        },
        android: {
            'txtEmail'                  : '//TODO',
            'txtPassword'               : '//TODO',
            'btnSignIn'                 : '//TODO',
        }
    },
    commands: {
        isDisplayed : function() {
            expect('@login.btnSignIn').to.be.present;
        }
    },
};
