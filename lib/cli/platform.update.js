/*!
 * Module dependencies.
 */

var phonegap = require('../main');

/**
 * $ phonegap platform update <platform>
 *
 * Update a specific platform version.
 *
 * Options:
 *
 *   - `argv` {Object} is an optimist object.
 *   - `callback` {Function} is a completion callback.
 *     - `e` {Error} is null unless there was an error.
 *     - `data` {Object} describes the built app.
 */

module.exports = function(argv, callback) {
    // display help when given no command
    if (argv._.length <= 2) {
        argv._.unshift('help');
        this.cli.argv(argv, callback);
        return;
    }

    // update data
    var data = {
        platforms: [argv._[2]]
    };

    // update the platform
    phonegap.platform.update(data, function(e) {
        callback(e);
    });
};
