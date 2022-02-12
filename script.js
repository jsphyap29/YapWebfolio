$(document).ready(function () {

    var $top = $('#toTop');
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $top.addClass('visible');
        } else {
            $top.removeClass('visible');
        }
    });


    $top.click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
    });

});