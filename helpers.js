/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2017
 * @license GPL-3.0
 */

'use strict';

const hbs = require('express-hbs');

module.exports = () => {
    hbs.registerHelper('foxyExcerpt', (title) => {
        let length = title.trim().length;

        if (length < 120) {
            return '';
        } else if (length < 200) {
            return ' wide';
        } else {
            return ' very-wide'
        }
    });
    hbs.registerHelper('foxyExcerpt', (content) => {
        let excerpt = content.toString().match(/<p>.*?<\/p>/gi);
        let minLength = 20;
        let maxLength = 60;
        let multiplier = 0.5;
        if (excerpt) {
            let stripHtml = excerpt[0].replace(/<(?:.|\n)*?>/gm, '');
            let words = stripHtml.split(' ');
            let length = Math.min(maxLength, Math.max(minLength, Math.round(words.length * multiplier)));
            words = words.slice(0, length);
            if (words.length === length && !/.*?[?!.]$/i.test(words[words.length - 1])) {
                words[words.length - 1] = words[words.length - 1].replace(/[,;]$/gi, '') + '...';
            }
            return words.join(' ').trim();
        } else {
            return '';
        }
    });
};
