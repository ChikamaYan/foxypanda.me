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
        var length = title.trim().length;

        if (length < 120) {
            return '';
        } else if (length < 200) {
            return ' wide';
        } else {
            return ' very-wide'
        }
    },
    foxyExcerptHelper: function (content) {
        var excerpt = content.toString().match(/<p>.*?<\/p>/gi);
        var minLength = 20;
        var maxLength = 60;
        var multiplier = 0.5;
        if (excerpt) {
            var stripHtml = excerpt[0].replace(/<(?:.|\n)*?>/gm, '');
            var words = stripHtml.split(' ');
            var length = Math.min(maxLength, Math.max(minLength, words.length * multiplier));
            words = words.slice(0, length);
            if (words.length === length && !/.*?[?!.]$/i.test(words[words.length - 1])) {
                words[words.length - 1] = words[words.length - 1].replace(/[,;]$/gi, '') + '...';
            }
            return words.join(' ').trim();
        } else {
            return '';
        }
    }
});

module.exports = FoxyPandaApp;