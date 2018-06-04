$(".link-tab").click(function() {
  window.open($(this).attr("href"));
});

$("h1").hover(
  function() {
    $(this).css("color", "SkyBlue");
  },
  function() {
    $(this).css("color", "Red");
  }
);
