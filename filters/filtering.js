$(document).ready(function() {
  $(".targetdiff").resizeText();
  $(".targetnumber").resizeText();
  var $container = $(".isotope").isotope({
    itemSelector: ".element-item",
    layoutMode: "packery"
  });
  $("#siteMeasures > .dropdown-menu > li > a").click(function() {
    var filterValue = $(this).attr("data-filter");
    $("#btnMeasureSelection").text($(this).text());
    $container.isotope({ filter: filterValue });
  });
  $("#siteFilters > .dropdown-menu > li > a").click(function() {
    var filterValue = $(this).attr("data-filter");
    $("#btnSiteFilter").text($(this).text());
    $container.isotope({ filter: filterValue });
  });
  $(".filters").on("click", "button", function() {
    var filterValue = $(this).attr("data-filter");
    $container.isotope({ filter: filterValue });
  });
  $("#sorts").on("click", "button", function() {
    var sortByValue = $(this).attr("data-sort-by");
    $container.isotope({ sortBy: sortByValue });
  });
  $(".button-group").each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", "button", function(event) {
      $buttonGroup.find(".is-checked").removeClass("is-checked");
      $(this).addClass("is-checked");
      event.preventDefault();
    });
  });
});
