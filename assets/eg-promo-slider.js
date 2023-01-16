/*
    EG Promo Slider
    © 2022 EcomGraduates
    https://wwww.ecomgraduates.com
*/

MicroModal.init('eg-promo-slider-modal', {
    disableScroll: true,
    onShow: modal => {
        // console.log('onShow')
    },
    onClose: modal => {
        // console.log('onClose')
    }
})

const splideElem = document.querySelector('#eg-promo-slider-modal .splide')

const splide = new Splide(splideElem, {
    arrows: splideElem.dataset.arrows === 'true',
    pagination: splideElem.dataset.pagination === 'true',
    gap: Number(splideElem.dataset.gap),
    rewind: splideElem.dataset.rewind === 'true',
    mediaQuery: 'min',
    perPage: Number(splideElem.dataset.breakpointXs),
    breakpoints: {
        576: {
            perPage: Number(splideElem.dataset.breakpointSm)
        },
        768: {
            perPage: Number(splideElem.dataset.breakpointMd)
        },
        992: {
            perPage: Number(splideElem.dataset.breakpointLg)
        },
        1200: {
            perPage: Number(splideElem.dataset.breakpointXl)
        },
        1400: {
            perPage: Number(splideElem.dataset.breakpointXxl)
        }
    }
})

const fixArrowsPosition = () => {
    splideElem.querySelectorAll('.splide__arrow').forEach((arrow) => {
        if (splideElem.querySelector('.block-img')) {
            arrow.style.top = `${splideElem.querySelector('.block-img').clientHeight / 2}px`
        }
    })
}

splide.on('mounted updated', () => {
    setTimeout(() => {
        fixArrowsPosition()
    }, 200)
})

splide.mount()
