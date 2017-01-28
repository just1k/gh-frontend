
$(document).ready(function () {
    $("#menu").hide();
    $("#menu-button").click(function () {
        $("#menu").toggle();
    });
    $("a.menu-item").click(function () {
        $("#menu").hide();
    });


    $("#menu").on("click","a", function (event) {

        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);

    });






});