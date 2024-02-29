(function($) {
    var slider = $('.slider').bxSlider({
        controls: false,
        pagerSelector: '#controls-pager',
        auto: true,
        pause: 5000
    });

    var id;
    $(window).resize(function() {
        clearTimeout(id);
        id = setTimeout(doneResizing, 500);
    });

    function doneResizing() {
        slider.reloadSlider();
    }
})(jQuery);