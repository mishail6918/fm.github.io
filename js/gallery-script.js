$('.gallery-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.gallery-thumbs',
    adaptiveHeight: true
})
$('.gallery-thumbs').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    asNavFor: '.gallery-main',
    focusOnSelect: true,
    infinite: true,
    responsive: [
        {
            breakpoint: 425,
            settings: {
                slidesToShow: 3,
            }
        }
    ]
});

$('.room-slider').slick({
    slidesToShow:1,
    variableWidth: true,
    infinite: true
});