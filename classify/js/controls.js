$(function () {
    $('button#sss').click(function () {
        var first = $('div.filtr-container').children('div').eq(0);
        console.log(first);
        $.fn.filterizr.prototype.filter(first);

    });
});