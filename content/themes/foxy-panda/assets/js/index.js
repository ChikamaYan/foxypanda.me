/**
 * A JavaScript file.
 *
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2016
 * @license https://opensource.org/licenses/mit-license.php MIT License
 * @version 0.0.1
 */

$(window).on('load', function () {

    var $body = $('body');

    if ($body.hasClass('home-template')) {

        var $container = $('#masonry');
        $container.masonry({
            itemSelector: '.item',
            gutter: '.grid-sizer'
        });

    }

});