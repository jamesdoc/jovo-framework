'use strict';

// =================================================================================
// App Configuration
// =================================================================================

const {App} = require('jovo-framework');

const config = {
    logging: true,
};

const app = new App(config);


// =================================================================================
// App Logic
// =================================================================================

app.setHandler({
    'LAUNCH': function() {
        this.toIntent('GetFullNameIntent');
    },

    'GetTimezone': function() {
        this.user().getTimezone().then((timezone) => {
            this.tell(`Your timezone is ${timezone}`);
        }).catch((error) => {
        });
    },

    'GetDistanceUnit': function() {
        this.user().getDistanceUnit().then((distanceUnit) => {
            this.tell(`Your distance measurement unit is ${distanceUnit}`);
        }).catch((error) => {
        });
    },

});

module.exports.app = app;

