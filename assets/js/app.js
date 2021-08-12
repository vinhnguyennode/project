const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// Header Sticky
const headerSticky = $('.header__nav')
const topBar = $('.header__topbar')

window.addEventListener('scroll', scrollFuntion);

function scrollFuntion() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        headerSticky.classList.add('scroll')
        topBar.classList.add('hide')
    }else {
        headerSticky.classList.remove('scroll')
        topBar.classList.remove('hide')
    }
}

// Search Button
const searchIcon = $('#search');
const input = $('.header__nav__container--search input');

searchIcon.onclick = function() {
    input.classList.toggle('active')
}

// Active Search 

let tabs = $$('.search__container__tab')
tabs.forEach(tab => {
    tab.onclick = function() {
        $('.search__container__tab.active').classList.remove('active')
        this.classList.add('active')
    }
})


// Active Link
const links = $$('.header__nav__container--list li');
const add = function() {
    $('.header__nav__container--list li.active').classList.remove('active')
    this.classList.add('active')
}

links.forEach(link => {
    link.addEventListener('click', add)
})

// Header modal menu

let box = $('.header__menu__overlay');
let boxBody = $('.header__menu__body--content');
let openBtn = $('#menu__open');
let closeBtn = $('#menu__close');

console.log(boxBody)
openBtn.onclick = () => {
    box.style.display = 'block';
    boxBody.classList.add('open');
}

closeBtn.onclick = () => {
    box.style.display = 'none';
    boxBody.classList.remove('open');
}

