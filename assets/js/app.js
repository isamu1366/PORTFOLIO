$(".tab-nav a").on("click", function () {

    $(".tab-nav a").removeClass("active");
    $(this).addClass("active");
    return false;


})
$(".tab-nav a").on("click", function () {

    $(".tab-content div").removeClass("active");
    $(this.hash).addClass("active");
    return false;


})