impress().init();

$(document).on("click", "img", function () {
    $(this).toggleClass('expand-image');
});