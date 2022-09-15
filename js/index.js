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
    name: 'Book List',
    picture: 'img/img-Book-List.png',
    languages: ['HTML/CSS', 'JavaScript'],
    details: {
      title: 'Book List',
      description_first: 'This is a project being built to show the usage of HTML and JavaScript. It\'s a book application where you are able to add and remove books from a list. The goal here is to build a book application with add and remove features from scratch using JavaScript and its Local Storage wonderful feature.',
      image_slideshow: 'img/img-Book-List.png',
      languages: {
        language_1: 'HTML/CSS',
        language_3: 'JavaScript',
      },
      demo_link: 'https://rolandfbk.github.io/book-list/',
      project_link: 'https://github.com/rolandfbk/book-list',
    },
  },
  {
    name: 'Task List',
    picture: 'img/img-Task-List.png',
    languages: ['HTML/CSS', 'JavaScript'],
    details: {
      title: 'Task List',
      description_first: 'This is a project being built to show the usage of HTML, JavaScript, and JavaScript modules. It\'s an application where you are able to add a task to the list and remove a task from the list. It saves the current state of the book list to local storage.',
      image_slideshow: 'img/img-Task-List.png',
      languages: {
        language_1: 'HTML/CSS',
        language_3: 'JavaScript',
      },
      demo_link: 'https://rolandfbk.github.io/task-list/',
      project_link: 'https://github.com/rolandfbk/task-list',
    },
  },
  {
    name: 'Learn Africa',
    picture: 'img/img-Learn-Africa.png',
    languages: ['HTML/CSS', 'JavaScript', 'React/Redux'],
    details: {
      title: 'Learn Africa',
      description_first: 'Render live data from the public API. This web application displays the list of all African countries and allows the user to click on a country of his/her choice and see the detailed description of that country.',
      image_slideshow: 'img/img-Learn-Africa.png',
      languages: {
        language_1: 'HTML/CSS',
        language_2: 'JavaScript',
        language_3: 'React/Redux',
      },
      demo_link: 'https://gorgeous-biscuit-91843d.netlify.app/',
      project_link: 'https://github.com/rolandfbk/metrics-webapp',
    },
  },
  {
    name: 'Recipe App',
    picture: 'img/img-Recipe-App.png',
    languages: ['HTML/CSS', 'Ruby on Rails', 'Ruby'],
    details: {
      title: 'Recipe App',
      description_first: 'The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Also, since sharing recipes is an important part of cooking the app should allow you to make them public so anyone can access them.',
      image_slideshow: 'img/img-Recipe-App.png',
      languages: {
        language_1: 'HTML/CSS',
        language_2: 'Ruby on Rails',
        language_3: 'Ruby',
      },
      demo_link: 'https://recipe-app-group-project.herokuapp.com',
      project_link: 'https://github.com/rolandfbk/recipe-app',
    },
  },
  {
    name: 'My Pocket',
    picture: 'img/img-My-Pocket.png',
    languages: ['HTML/CSS', 'Ruby on Rails', 'Ruby'],
    details: {
      title: 'My Pocket',
      description_first: 'My Pocket app is a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
      image_slideshow: 'img/img-My-Pocket.png',
      languages: {
        language_1: 'HTML/CSS',
        language_2: 'Ruby on Rails',
        language_3: 'Ruby',
      },
      demo_link: 'https://mypocket.herokuapp.com/',
      project_link: 'https://github.com/rolandfbk/my-pocket',
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
        <ul class="flex ul-format"> `;

  for (let j = 0; j < project[i].languages.length; j += 1) {
    template[i] += `<li class="courses">${project[i].languages[j]}</li>`;
  }

  template[i] += `  
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


const projectCardDesktop = document.querySelector('.project-card-desktop');
const div_desk = [];
const template_desk = [];

for (let i = 0; i < project.length; i += 1) {
  div_desk[i] = document.createElement('div');
  div_desk[i].className = 'card';
  template_desk[i] = `
    <img class="project-pic-one" src="${project[i].picture}" alt="" />
    <div class="project-name-one">
      <div class="set">
        <h3>${project[i].name}</h3>
        <ul class="flex ul-format"> `;

  for (let j = 0; j < project[i].languages.length; j += 1) {
    template_desk[i] += `<li class="courses">${project[i].languages[j]}</li>`;
  }

  template_desk[i] += `  
        </ul>
        <div class="clearfix"></div>
        <button class="main-project project-button flex flex-align">
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

  div_desk[i].innerHTML = template_desk[i];
  projectCardDesktop.appendChild(div_desk[i]);
}

const mainProject = document.querySelectorAll('.main-project');
mainProject.forEach((button, index) => {
  button.addEventListener('click', () => {
    const blockMain = document.getElementById('project_details_main_language');
    let first = blockMain.firstElementChild;
    while (first) {
      first.remove();
      first = blockMain.firstElementChild;
    }

    const projectDetailsTitleMain = document.getElementById('project_details_main_title');
    projectDetailsTitleMain.textContent = project[index].details.title;

    const projectDetailsLanguageMain = document.getElementById('project_details_main_language');

    const listMain = [];
    const arrLangMain = [];
    let count = 0;

    const keysMain = Object.keys(project[index].details.languages);
    const valuesMain = Object.values(project[index].details.languages);
    for (let i = 0; i < keysMain.length; i += 1) {
      listMain[count] = document.createElement('li');
      listMain[count].className = 'courses';
      arrLangMain[count] = valuesMain[i];
      listMain[count].textContent = arrLangMain[count];
      projectDetailsLanguageMain.appendChild(listMain[count]);
      count += 1;
    }

    const projectDetailsSlideshowMain = document.getElementById('project_details_main_slideshow');
    projectDetailsSlideshowMain.innerHTML = `<img src="${project[index].details.image_slideshow}" alt="">`;

    const projectDetailsDes1Main = document.getElementById('project_details_main_des_1');
    projectDetailsDes1Main.textContent = project[index].details.description_first;

    const projectDetailsDes2Main = document.getElementById('project_details_main_des_2');
    projectDetailsDes2Main.textContent = project[index].details.description_second;

    const liveDemoMain = document.getElementById('live-demo-main');
    liveDemoMain.onclick = function () {
      window.location.href = project[index].details.demo_link;
    };

    const projectDemoMain = document.getElementById('project-demo-main');
    projectDemoMain.onclick = function () {
      window.location.href = project[index].details.project_link;
    };
  });
});

// // Project details implementation
// const projectDetails = {
//   title: 'Project name goes here',
//   description_first: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
//   description_second: 'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
//   image_slideshow: 'img/slideshow.svg',
//   languages: {
//     language_1: 'HTML/CSS',
//     language_2: 'Ruby on Rails',
//     language_3: 'JavaScript',
//   },
// };

// // For the desktop version
// const projectDetailsMainTitle = document.getElementById('project_details_main_title');
// projectDetailsMainTitle.textContent = projectDetails.title;

// const projectDetailsMainLanguage = document.getElementById('project_details_main_language');

// const listMain = [];
// const arrLangMain = [];
// let countMain = 0;

// const keysMain = Object.keys(projectDetails.languages);
// const valuesMain = Object.values(projectDetails.languages);
// for (let i = 0; i < keysMain.length; i += 1) {
//   listMain[countMain] = document.createElement('li');
//   listMain[countMain].className = 'courses';
//   arrLangMain[countMain] = valuesMain[i];
//   listMain[countMain].textContent = arrLangMain[countMain];
//   projectDetailsMainLanguage.appendChild(listMain[countMain]);
//   countMain += 1;
// }

// const projectDetailsMainSlideshow = document.getElementById('project_details_main_slideshow');
// projectDetailsMainSlideshow.innerHTML = `<img src="${projectDetails.image_slideshow}" alt="">`;

// const projectDetailsMainDes1 = document.getElementById('project_details_main_des_1');
// projectDetailsMainDes1.textContent = projectDetails.description_first;

// const projectDetailsMainDes2 = document.getElementById('project_details_main_des_2');
// projectDetailsMainDes2.textContent = projectDetails.description_second;

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