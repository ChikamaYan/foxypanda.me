/**
 * A JavaScript file.
 *
 * @author Timur Kuzhagaliyev <tim@xaerus.co.uk>
 * @copyright 2016
 * @license https://opensource.org/licenses/mit-license.php MIT License
 * @version 0.0.1
 */

var App = require('ghost-app'),
    FoxyPandaApp;

FoxyPandaApp = App.extend({
    install: function () {
    },
    uninstall: function () {
    },
    activate: function () {
        this.ghost.helpers.register('masonry', this.masonryHelper);
        this.ghost.helpers.register('foxyExcerpt', this.foxyExcerptHelper)
    },
    deactivate: function () {
    },
    masonryHelper: function (title) {
        var length = title.length;

        if (length < 5) {
            return '';
        } else if (length < 20) {
            return ' wide';
        } else {
            return ' verywide'
        }
    },
    foxyExcerptHelper: function (content) {
        var excerpt = content.toString().match(/<p>.*?<\/p>/gi);
        if (excerpt.length > 0) {
            return excerpt[0].replace(/<(?:.|\n)*?>/gm, '');
        } else {
            return '';
        }
    }
});

module.exports = FoxyPandaApp;