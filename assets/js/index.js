const nav = document.querySelector('#nav')
const navToggle = document.querySelector('#navToggle')

navToggle.addEventListener("click", function(event) {
    event.preventDefault()

    nav.classList.toggle("show")
})
