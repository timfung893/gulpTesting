$(document).ready(function () {
  $(".quantity").prop("disabled", true);
  $(".plus").on("click", function () {
    $(".quantity").val(parseInt($(".quantity").val()) + 1);
  });
  $(".minus").on("click", function () {
    $(".quantity").val(parseInt($(".quantity").val()) - 1);
    if ($(".quantity").val() == 0) {
      $(".quantity").val(1);
    }
  });
});
