 $(function() {

     $('.belt').on('click', function() {
         $('.catalog__choose-link').removeClass('catalog__choose-link--active');
         $('.simply').addClass('catalog__choose-link--active');
         $('.catalog__items').removeClass('catalog__items--active');
         $('#tab-1').addClass('catalog__items--active');
     });

     $('.belt-ero').on('click', function() {
         $('.catalog__choose-link').removeClass('catalog__choose-link--active');
         $('.ero').addClass('catalog__choose-link--active');
         $('.catalog__items').removeClass('catalog__items--active');
         $('#tab-2').addClass('catalog__items--active');
     });




     $('.catalog__choose-link').on('click', function(e) {
         e.preventDefault();

         $('.catalog__choose-link').removeClass('catalog__choose-link--active');
         $(this).addClass('catalog__choose-link--active');

         $('.catalog__items').removeClass('catalog__items--active');
         $($(this).attr('href')).addClass('catalog__items--active');
     });



     $('.catalog__link').on('click', function() {
         $(".popup").css({ display: 'block' }).animate({ opacity: '1' }, 1400)

     });


     $('.popup__close').on('click', function() {
         $(".popup").css({ display: 'none' });

     });



     $('.foto').slick({
         dots: false,
         arrows: false,
         infinite: true,
         slidesToShow: 5,
         centerMode: true,
         autoplay: true,
         autoplaySpeed: 4000,
         variableWidth: true,
         accessibility: false
     });

 });