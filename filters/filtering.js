$(document).ready(function() {
  // $(".targetdiff").resizeText();
  // $(".targetnumber").resizeText();
  var $container = $(".isotope2").isotope({
    itemSelector: ".iso2-item",
    layoutMode: "packery"
  });

  var filters = [];
  $(".button-group").each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", "button", function(event) {
      //$buttonGroup.find(".is-checked").removeClass("is-checked");
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

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. davidwalsh.name/javascript-debounce-function && underscorejs.org/#debounce
  function fn_my_debouncer(func, wait) {
    var timeout;
    return function() {
      var context = this;
      var args = arguments;
      var later = function() {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  var fn_keyup = fn_my_debouncer(function(e) {
    var val = $(this)
      .val()
      .toLowerCase();
    $(e.data.select).filter(function() {
      var thus = $(this);
      thus.toggle(
        thus
          .text()
          .toLowerCase()
          .indexOf(val) > -1
      );
    });
  }, 222);
  $("#myInput1").on("input", { select: ".dd-menu-1 > li" }, fn_keyup);
  $("#myInput2").on("input", { select: ".dd-menu-2 > li" }, fn_keyup);
  $("#myInput3").on("input", { select: ".dd-menu-3 > li" }, fn_keyup);

  $('.dropdown-menu a[data-toglr="tab"]').click(function(e) {
    e.stopPropagation();
    e.preventDefault();
    var num = this.hash.split("pane")[1];
    $("#myInput" + num).val("");
    $(".dd-menu-" + num + " > li").show();
    $(this).tab("show");
  });
});
