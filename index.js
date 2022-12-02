const rates = document.querySelectorAll('.btnRates')
const submitRating = document.getElementById('submitRating')
const amountedSelected = document.getElementById('amountSelected')
const backToRating = document.getElementById('backRating')
const ratingState = document.querySelector('.ratingState')
const thankYouState = document.querySelector('.thankYouState')

submitRating.addEventListener('click', () => {
    ratingState.classList.add('hidden')
    thankYouState.classList.remove('hidden')
})

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        amountedSelected.innerText = `You selected ${rate.innerHTML} out of 5`
    })
})

backToRating.addEventListener('click', () => {
    ratingState.classList.remove('hidden')
    thankYouState.classList.add('hidden')
})