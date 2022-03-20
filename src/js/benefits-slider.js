const slider = $(".problems__benefit-section").bxSlider({
    controls: false,
    pager: true,
    pagerType: 'short',
    touchEnabled: true,
    oneToOneTouch: true,
    maxSlides: 4,
    moveSlides: 4,
});

$(".benefits__slider-button--prev").click((e) => {
    e.preventDefault();
    slider.goToPrevSlide();
});


$(".benefits__slider-button--next").click((e) => {
    e.preventDefault();
    slider.goToNextSlide();
})

const isTablet = window.matchMedia("(max-width: 768px)").matches;
const isMobile = window.matchMedia("(max-width: 375px)").matches;

if (!isTablet && !isMobile) {
    itemWidth = 500, () =>
        slider = $('.bxslider').bxSlider();
    slider.destroySlider();
}