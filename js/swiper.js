new Swiper('.slider__image-wrapper', {
    direction: 'vertical',
    simulateTouch: false,

    keyboard: {
        enebled: true,
        pageUpDown: true,
        onlyInViewport: true,
    },

    mousewheel: {
        sensitivity: 10,
        releaseOnEdges: true,
    },

    hashNavigation: {
        watchState: true,
    }
});