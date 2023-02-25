// Import stylesheets
import './style.css';

// Write Javascript code!
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let formData = getFormVals(e.target.elements);
  createList(formData);
});

const getFormVals = (formData) => {
  let data = {};
  for (const els of formData) {
    if (els.name !== '' && els.value !== '') {
      data = { ...data, [els.name]: els.value };
    }
  }
  return data;
};
const createList = (els) => {
  const UL = document.querySelector('#list');
  for (const el in els) {
    const LI = document.createElement('li');
    LI.innerText = els[el];
    UL.appendChild(LI);
  }
};
