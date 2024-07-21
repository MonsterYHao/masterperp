(function ($) {
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable :true,
    },
  });


  $(document).ready(function() {
    $('#bookClose').click(function() {
        $('#bookNow').addClass('close');
    });
  });

}(jQuery));
