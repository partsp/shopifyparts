/*
    EG Sticky Video
    © 2022 EcomGraduates
    https://wwww.ecomgraduates.com
*/

const wrapper = document.querySelector('#eg-sticky-video')
const localStorageDelayValue = window.localStorage.getItem('eg-sticky-video-delay')

if (localStorageDelayValue) {
    if (Date.now() >= localStorageDelayValue) {
        wrapper.removeAttribute('hidden')
    }
} else {
    wrapper.removeAttribute('hidden')
}

if (window.location.href.includes('eg-sticky-video')) {
    wrapper.removeAttribute('hidden')
}

const closeBtn = document.querySelector('#eg-sticky-video-close-btn')

closeBtn.addEventListener('click', () => {
    document.querySelector('#eg-sticky-video').remove()

    const closingDelayInHours = Number(closeBtn.dataset.closingDelay)
    window.localStorage.setItem('eg-sticky-video-delay', Date.now() + (closingDelayInHours * 3600000))
})
