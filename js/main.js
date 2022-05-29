$(function () {

    $('.btn__menu').on('click', function () {
        $('.menu__box').slideToggle();
    });

    $('.tvit__items').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
        // responsive: [
        //     {
        //         breakpoint: 1106,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //         }
        //     }
        // ]
    });
});