const toggleBtn = document.querySelector('.navbar_toggleBtn');
const sideMenu = document.querySelector('.aside')
const Back = document.querySelector('#back')

toggleBtn.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
})

Back.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
})