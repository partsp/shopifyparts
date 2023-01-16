/*
    EG Age Check
    © 2022 EcomGraduates
    https://wwww.ecomgraduates.com
*/

const ageVerified = window.localStorage.getItem('eg-age-check')

if (!ageVerified || window.location.href.includes('eg-age-check')) {
    MicroModal.show('eg-age-check-modal', {
        disableScroll: true,
        onShow: modal => {
            // console.log('onShow')
        },
        onClose: modal => {
            // console.log('onClose')
            window.localStorage.setItem('eg-age-check', true)
        }
    })

    const minAge = Number(document.querySelector('#eg-age-check-form').dataset.minAge)

    let m
    let d
    let y

    let agePassed = false

    const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

    const continueBtn = document.querySelector('#eg-age-check-modal .micromodal__footer button')

    setInterval(() => {
        document.querySelectorAll('#eg-age-check-form input').forEach(input => {
            if (input.id.includes('month')) {
                m = input.value
            } else if (input.id.includes('day')) {
                d = input.value
            } else {
                y = input.value
            }

            agePassed = false

            if ((m >= 1 && m <= 12) && (d >= 1 && d <= 31) && (y >= 1900 && y <= new Date().getFullYear())) {
                if (m.length === 1) m = `0${m}`
                if (d.length === 1) d = `0${d}`

                if (getAge(`${y}-${m}-${d}`) >= minAge) {
                    agePassed = true
                } else {
                    agePassed = false
                }
            }

            if (agePassed) {
                continueBtn.disabled = false
            } else {
                continueBtn.disabled = true
            }
        })
    }, 1000)
}
