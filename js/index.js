//Menu implementation
const showMenu = document.querySelector('.toogle-menu');

showMenu.addEventListener('click', () => {
  document.getElementById('wrapper').style.display = 'none';
  document.getElementById('wrapper-menu').style.display = 'flex';
});

const closeMenu = document.querySelector('.close-menu');

closeMenu.addEventListener('click', () => {
  document.getElementById('wrapper-menu').style.display = 'none';
  document.getElementById('wrapper').style.display = 'flex';
});

const closeMenuHeadline = document.querySelector('.close-menu-headline');

closeMenuHeadline.addEventListener('click', () => {
  document.getElementById('wrapper-menu').style.display = 'none';
  document.getElementById('wrapper').style.display = 'flex';
});

const closeMenuWork = document.querySelector('.close-menu-work');

closeMenuWork.addEventListener('click', () => {
  document.getElementById('wrapper-menu').style.display = 'none';
  document.getElementById('wrapper').style.display = 'flex';
});

const closeMenuAbout = document.querySelector('.close-menu-about');

closeMenuAbout.addEventListener('click', () => {
  document.getElementById('wrapper-menu').style.display = 'none';
  document.getElementById('wrapper').style.display = 'flex';
});

const closeMenuContact = document.querySelector('.close-menu-contact');

closeMenuContact.addEventListener('click', () => {
  document.getElementById('wrapper-menu').style.display = 'none';
  document.getElementById('wrapper').style.display = 'flex';
});

//Project details implementation
const project_details = {
  title: 'Project name goes here',
  description_first: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
  description_second: 'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  image_slideshow: 'img/slideshow.svg',
  languages: {
    language_1: 'HTML/CSS',
    language_2: 'Ruby on Rails',
    language_3: 'JavaScript'
  }
}

//For The mobile version
const project_details_title = document.getElementById('project_details_title');
project_details_title.textContent = project_details.title;

const project_details_language = document.getElementById('project_details_language');

let list = [];
let arr_lang = [];
let count = 0;
for (let lang in project_details.languages)
{
  list[count] = document.createElement('li');
  list[count].className = 'courses';

  arr_lang[count] = project_details.languages[lang];
  list[count].textContent = arr_lang[count];
  project_details_language.appendChild(list[count]);
  count++;
}

const project_details_slideshow = document.getElementById('project_details_slideshow');
project_details_slideshow.innerHTML = '<img src="'+project_details.image_slideshow+'" alt="">';

const project_details_des_1 = document.getElementById('project_details_des_1');
project_details_des_1.textContent = project_details.description_first;

const project_details_des_2 = document.getElementById('project_details_des_2');
project_details_des_2.textContent = project_details.description_second;

//For the desktop version
const project_details_main_title = document.getElementById('project_details_main_title');
project_details_main_title.textContent = project_details.title;

const project_details_main_language = document.getElementById('project_details_main_language');

let list_main = [];
let arr_lang_main = [];
let count_main = 0;
for (let lang in project_details.languages)
{
  list_main[count_main] = document.createElement('li');
  list_main[count_main].className = 'courses';

  arr_lang_main[count_main] = project_details.languages[lang];
  list_main[count_main].textContent = arr_lang_main[count_main];
  project_details_main_language.appendChild(list_main[count_main]);
  count_main++;
}

const project_details_main_slideshow = document.getElementById('project_details_main_slideshow');
project_details_main_slideshow.innerHTML = '<img src="'+project_details.image_slideshow+'" alt="">';

const project_details_main_des_1 = document.getElementById('project_details_main_des_1');
project_details_main_des_1.textContent = project_details.description_first;

const project_details_main_des_2 = document.getElementById('project_details_main_des_2');
project_details_main_des_2.textContent = project_details.description_second;

const showProjectDetails = document.querySelectorAll('.mobile-project');

for (const button of showProjectDetails) {
  button.addEventListener('click', () => {
    document.getElementById('wrapper').style.display = 'none';
    document.getElementById('wrapper-project-popup').style.display = 'flex';
  });
}

const closeProjectDetails = document.querySelector('.close-project-popup');

closeProjectDetails.addEventListener('click', () => {
  document.getElementById('wrapper-project-popup').style.display = 'none';
  document.getElementById('wrapper').style.display = 'flex';
});

const showProjectDetailsMain = document.querySelectorAll('.main-project');

for (const buttonMain of showProjectDetailsMain) {
  buttonMain.addEventListener('click', () => {
    document.getElementById('wrapper').style.display = 'none';
    document.getElementById('wrapper-project-popup-main').style.display = 'flex';
  });
}

const closeProjectDetailsMain = document.querySelector('.close-project-popup-main');

closeProjectDetailsMain.addEventListener('click', () => {
  document.getElementById('wrapper-project-popup-main').style.display = 'none';
  document.getElementById('wrapper').style.display = 'flex';
});