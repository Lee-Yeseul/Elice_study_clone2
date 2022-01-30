/////////aside//////////
const toggleBtn = document.querySelector('.navbar_toggleBtn');
const sideMenu = document.querySelector('.aside')
const Back = document.querySelector('#back')

toggleBtn.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
})

Back.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
})

/////////scroll//////////

const page1 = document.querySelector('.page1').offsetTop;
const page2 = document.querySelector('.page2').offsetTop;
const page3 = document.querySelector('.page3').offsetTop;
const page4 = document.querySelector('.page4').offsetTop;

// const headerHeight = document.querySelector('header').offsetHeight;

const homeBtn = document.querySelector('#homeBtn');
const platformBtn = document.querySelector('#platformBtn');
const curriculumBtn = document.querySelector('#curriculumBtn');
const fieldBtn = document.querySelector('#fieldBtn');


homeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({top: page1, behavior: 'smooth'});
})

platformBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({top: page2, behavior: 'smooth'});
})

curriculumBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({top: page3, behavior: 'smooth'});
})

fieldBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({top: page4, behavior: 'smooth'});
})

