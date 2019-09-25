$(document).ready(function() {
  var $container = $(".isotope2").isotope({
    itemSelector: ".iso2-item",
    layoutMode: "packery"
  });

  var filters = [];
  $(".button-group").each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", "button", function(event) {
      var $el = $(this);
      if ($el.hasClass("is-checked")) {
        $el.removeClass("is-checked");
        filters.splice(filters.indexOf($el.attr("data-filter")), 1);
      } else {
        $el.addClass("is-checked");
        filters.push($el.attr("data-filter"));
      }
      $container.isotope({ filter: filters.join() });
    });
  });

});
