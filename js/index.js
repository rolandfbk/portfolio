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

const project = [
  {
    name: 'Awesome Book App',
    picture: 'img/Rectangle_21.svg',
    languages: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    details: {
      title: 'Awesome Book App',
      description_first: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      image_slideshow: 'img/Rectangle_21.svg',
      languages: {
        language_1: 'HTML/CSS',
        language_2: 'Ruby on Rails',
        language_3: 'JavaScript',
      },
      demo_link: 'https://rolandfbk.github.io/awesome-books-app/',
      project_link: 'https://github.com/rolandfbk/awesome-books-app',
    },
  },
  {
    name: 'Book List',
    picture: 'img/project2.svg',
    languages: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    details: {
      title: 'Book List',
      description_first: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      image_slideshow: 'img/project2.svg',
      languages: {
        language_1: 'HTML/CSS',
        language_2: 'Ruby on Rails',
        language_3: 'JavaScript',
      },
      demo_link: 'https://rolandfbk.github.io/book-list/',
      project_link: 'https://github.com/rolandfbk/book-list',
    },
  },
  {
    name: 'Task List',
    picture: 'img/project3.svg',
    languages: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    details: {
      title: 'Task List',
      description_first: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      image_slideshow: 'img/project3.svg',
      languages: {
        language_1: 'HTML/CSS',
        language_2: 'Ruby on Rails',
        language_3: 'JavaScript',
      },
      demo_link: 'https://rolandfbk.github.io/task-list/',
      project_link: 'https://github.com/rolandfbk/task-list',
    },
  },
  {
    name: 'DRC Investment',
    picture: 'img/project4.svg',
    languages: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    details: {
      title: 'DRC Investment',
      description_first: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      image_slideshow: 'img/project4.svg',
      languages: {
        language_1: 'HTML/CSS',
        language_2: 'Ruby on Rails',
        language_3: 'JavaScript',
      },
      demo_link: 'https://rolandfbk.github.io/drc-investment/',
      project_link: 'https://github.com/rolandfbk/drc-investment',
    },
  },
];

const projectCard = document.querySelector('.project-card');
const div = [];
const template = [];

for (let i = 0; i < project.length; i += 1) {
  div[i] = document.createElement('div');
  div[i].className = 'card';
  template[i] = `
    <img class="project-pic-one" src="${project[i].picture}" alt="" />
    <div class="project-name-one">
      <div class="set">
        <h3>${project[i].name}</h3>
        <ul class="flex ul-format">
          <li class="courses">HTML/CSS</li>
          <li class="courses">Ruby on Rails</li>
          <li class="courses">JavaScript</li>
        </ul>
        <div class="clearfix"></div>
        <button class="mobile-project project-button flex flex-align">
          See this project

          <svg
            class="icon-project"
            width="21"
            height="17"
            viewBox="0 0 21 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="icon-project"
              d="M16.7423 7.62613L11.4834 2.36722L12.8976 0.953003L20.5707 8.62611L12.8976 16.2992L11.4834 14.885L16.7422 9.62613H2.52881e-07L0 7.62613H16.7423Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div class="clearfix-big"></div>
    </div>
  `;

  div[i].innerHTML = template[i];
  projectCard.appendChild(div[i]);
}

const mobileProject = document.querySelectorAll('.mobile-project');
mobileProject.forEach((button, index) => {
  button.addEventListener('click', () => {
    const block = document.getElementById('project_details_language');
    let first = block.firstElementChild;
    while (first) {
      first.remove();
      first = block.firstElementChild;
    }

    const projectDetailsTitle = document.getElementById('project_details_title');
    projectDetailsTitle.textContent = project[index].details.title;

    const projectDetailsLanguage = document.getElementById('project_details_language');

    const list = [];
    const arrLang = [];
    let count = 0;

    const keys = Object.keys(project[index].details.languages);
    const values = Object.values(project[index].details.languages);
    for (let i = 0; i < keys.length; i += 1) {
      list[count] = document.createElement('li');
      list[count].className = 'courses';
      arrLang[count] = values[i];
      list[count].textContent = arrLang[count];
      projectDetailsLanguage.appendChild(list[count]);
      count += 1;
    }

    const projectDetailsSlideshow = document.getElementById('project_details_slideshow');
    projectDetailsSlideshow.innerHTML = `<img src="${project[index].details.image_slideshow}" alt="">`;

    const projectDetailsDes1 = document.getElementById('project_details_des_1');
    projectDetailsDes1.textContent = project[index].details.description_first;

    const projectDetailsDes2 = document.getElementById('project_details_des_2');
    projectDetailsDes2.textContent = project[index].details.description_second;

    const liveDemo = document.getElementById('live-demo');
    liveDemo.onclick = function () {
      window.location.href = project[index].details.demo_link;
    };

    const projectDemo = document.getElementById('project-demo');
    projectDemo.onclick = function () {
      window.location.href = project[index].details.project_link;
    };
  });
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