$(document).ready(function() {
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

  $("#ddTabSearchInput1").on(
    "change keyup paste cut",
    { select: ".dd-menu-1 > li" },
    fn_keyup
  );
  $("#ddTabSearchInput2").on(
    "change keyup paste cut",
    { select: ".dd-menu-2 > li" },
    fn_keyup
  );
  $("#ddTabSearchInput3").on(
    "change keyup paste cut",
    { select: ".dd-menu-3 > li" },
    fn_keyup
  );

  $('.dropdown-menu a[data-toglr="tab"]').click(function(e) {
    e.stopPropagation();
    e.preventDefault();
    var num = this.hash.split("pane")[1];
    $("#ddTabSearchInput" + num).val("");
    $(".dd-menu-" + num + " > li").show();
    $(this).tab("show");
  });
});
