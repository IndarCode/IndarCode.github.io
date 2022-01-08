(function () {
  $(".hamburger-box").click(function () {
    $(this).toggleClass("is-active").parent().toggleClass("openNav");
    $(".mob-nav").toggleClass("isActive");
  });
})();
