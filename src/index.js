const questionNavItems = {
  general: document.querySelector('.faq-nav__item--general'),
  creators: document.querySelector('.faq-nav__item--creators'),
  bites: document.querySelector('.faq-nav__item--bites'),
  groups: document.querySelector('.faq-nav__item--groups'),
  mashup: document.querySelector('.faq-nav__item--mash-up'),
  parties: document.querySelector('.faq-nav__item--parties'),
  friends: document.querySelector('.faq-nav__item--friends'),
  privacy: document.querySelector('.faq-nav__item--privacy'),
  reporting: document.querySelector('.faq-nav__item--reporting'),
  support: document.querySelector('.faq-nav__item--support'),
};

const answerListItems = {
  general: document.querySelector('.answers--general'),
  creators: document.querySelector('.answers--creators'),
  bites: document.querySelector('.answers--bites'),
  groups: document.querySelector('.answers--groups'),
  mashup: document.querySelector('.answers--mash-up'),
  parties: document.querySelector('.answers--parties'),
  friends: document.querySelector('.answers--friends'),
  privacy: document.querySelector('.answers--privacy'),
  reporting: document.querySelector('.answers--reporting'),
  support: document.querySelector('.answers--support'),
};

let questionNavItemActive = document.querySelector('.faq-nav__item--active');
let answerListItemActive = document.querySelector('.answers--active');

for (let key in questionNavItems) {
  questionNavItems[key].addEventListener('click', () => {
    questionNavItemActive.classList.remove('faq-nav__item--active');
    answerListItemActive.classList.remove('answers--active');

    questionNavItems[key].classList.add('faq-nav__item--active');
    answerListItems[key].classList.add('answers--active');

    questionNavItemActive = questionNavItems[key];
    answerListItemActive = answerListItems[key];
  } )
};