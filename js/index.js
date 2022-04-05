// Menu implementation
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

// Project details implementation
const projectDetails = {
  title: 'Project name goes here',
  description_first: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
  description_second: 'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  image_slideshow: 'img/slideshow.svg',
  languages: {
    language_1: 'HTML/CSS',
    language_2: 'Ruby on Rails',
    language_3: 'JavaScript',
  },
};

// For The mobile version
const projectDetailsTitle = document.getElementById('project_details_title');
projectDetailsTitle.textContent = projectDetails.title;

const projectDetailsLanguage = document.getElementById('project_details_language');

const list = [];
const arrLang = [];
let count = 0;

const keys = Object.keys(projectDetails.languages);
const values = Object.values(projectDetails.languages);
for (let i = 0; i < keys.length; i += 1) {
  list[count] = document.createElement('li');
  list[count].className = 'courses';
  arrLang[count] = values[i];
  list[count].textContent = arrLang[count];
  projectDetailsLanguage.appendChild(list[count]);
  count += 1;
}

const projectDetailsSlideshow = document.getElementById('project_details_slideshow');
projectDetailsSlideshow.innerHTML = `<img src="${projectDetails.image_slideshow}" alt="">`;

const projectDetailsDes1 = document.getElementById('project_details_des_1');
projectDetailsDes1.textContent = projectDetails.description_first;

const projectDetailsDes2 = document.getElementById('project_details_des_2');
projectDetailsDes2.textContent = projectDetails.description_second;

// For the desktop version
const projectDetailsMainTitle = document.getElementById('project_details_main_title');
projectDetailsMainTitle.textContent = projectDetails.title;

const projectDetailsMainLanguage = document.getElementById('project_details_main_language');

const listMain = [];
const arrLangMain = [];
let countMain = 0;

const keysMain = Object.keys(projectDetails.languages);
const valuesMain = Object.values(projectDetails.languages);
for (let i = 0; i < keysMain.length; i += 1) {
  listMain[countMain] = document.createElement('li');
  listMain[countMain].className = 'courses';
  arrLangMain[countMain] = valuesMain[i];
  listMain[countMain].textContent = arrLangMain[countMain];
  projectDetailsMainLanguage.appendChild(listMain[countMain]);
  countMain += 1;
}

const projectDetailsMainSlideshow = document.getElementById('project_details_main_slideshow');
projectDetailsMainSlideshow.innerHTML = `<img src="${projectDetails.image_slideshow}" alt="">`;

const projectDetailsMainDes1 = document.getElementById('project_details_main_des_1');
projectDetailsMainDes1.textContent = projectDetails.description_first;

const projectDetailsMainDes2 = document.getElementById('project_details_main_des_2');
projectDetailsMainDes2.textContent = projectDetails.description_second;

const showProjectDetails = document.querySelectorAll('.mobile-project');

for (let i = 0; i < showProjectDetails.length; i += 1) {
  showProjectDetails[i].addEventListener('click', () => {
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

for (let y = 0; y < showProjectDetailsMain.length; y += 1) {
  showProjectDetailsMain[y].addEventListener('click', () => {
    document.getElementById('wrapper').style.display = 'none';
    document.getElementById('wrapper-project-popup-main').style.display = 'flex';
  });
}

const closeProjectDetailsMain = document.querySelector('.close-project-popup-main');

closeProjectDetailsMain.addEventListener('click', () => {
  document.getElementById('wrapper-project-popup-main').style.display = 'none';
  document.getElementById('wrapper').style.display = 'flex';
});