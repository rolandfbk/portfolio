const nameStorage = document.getElementById('name');
const emailStorage = document.getElementById('email');
const messageStorage = document.getElementById('message');

function setContent() {
  const setFormContent = JSON.parse(JSON.stringify(localStorage.getItem('formContent')));
  const newFormObj = JSON.parse(setFormContent);

  document.getElementById('name').value = newFormObj.nameStorage;
  document.getElementById('email').value = newFormObj.emailStorage;
  document.getElementById('message').value = newFormObj.messageStorage;
}

function populateStorage() {
  const formObj = {
    nameStorage: document.getElementById('name').value,
    emailStorage: document.getElementById('email').value,
    messageStorage: document.getElementById('message').value,
  };

  localStorage.setItem('formContent', JSON.stringify(formObj));

  setContent();
}

if (!localStorage.getItem('formContent')) {
  populateStorage();
} else {
  setContent();
}

nameStorage.onchange = populateStorage;
emailStorage.onchange = populateStorage;
messageStorage.onchange = populateStorage;