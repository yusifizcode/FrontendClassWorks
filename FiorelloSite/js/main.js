$(function(){
    $('.search-icon').click(function(){
        $('.search-sec').toggleClass('active-search');
    })

    var $products = $('.products').isotope({
        // options
      });
      // filter items on button click
      $('.flowers-list').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        // console.log($(this)[0]);
        $('.flower-item').removeClass('active');
        $(this).addClass('active');
        $products.isotope({ filter: filterValue });
      });


      $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      })
})