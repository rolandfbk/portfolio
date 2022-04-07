let nameStorage = document.getElementById('name');
let emailStorage = document.getElementById('email');
let messageStorage = document.getElementById('message');

if(!localStorage.getItem('formContent')) {
  populateStorage();
}else {
  setContent();
}

function populateStorage() {
  const formObj = {
    nameStorage: document.getElementById('name').value,
    emailStorage: document.getElementById('email').value,
    messageStorage: document.getElementById('message').value
  }

  localStorage.setItem('formContent', JSON.stringify(formObj));

  setContent();
}

