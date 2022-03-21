const slider = $(".features").bxSlider({
    controls: false,
    pager: true,
    pagerType: 'short',
});

$(".features__slider-button--prev").click((e) => {
    e.preventDefault();
    slider.goToPrevSlide();
});


$(".features__slider-button--next").click((e) => {
    e.preventDefault();
    slider.goToNextSlide();
})

const isTablet = window.matchMedia("(max-width: 769px)").matches;
const isMobile = window.matchMedia("(max-width: 375px)").matches;

if (!isTablet) {
    itemWidth = 500, () =>
        slider = $('.bxslider').bxSlider();
    slider.destroySlider();
}

if (isTablet) {
    itemWidth = 1000, () =>
        slider = $('.bxslider').bxSlider();
    slider.destroySlider();
}