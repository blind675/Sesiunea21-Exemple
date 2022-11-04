const phoneInput = document.getElementById('phoneInput');
const phoneErrorContainer = document.getElementById('phoneError');

function handlePhoneChange(event) {
  const phoneValue = event.target.value;
  console.log('phoneValue:', phoneValue);
  
  if(isNaN(phoneValue)) {
    phoneErrorContainer.innerHTML = '<p>Doar numere permise </p>'
  } else {
    phoneErrorContainer.innerHTML = '';
  }
}

phoneInput.addEventListener('input', handlePhoneChange);




const emailInput = document.getElementById('emailInput');
const emailErrorContainer = document.getElementById('emailError');


emailInput.addEventListener('change', (event) => {
  const emailValue =  event.target.value;

  console.log('emailValue:', emailValue);
  if(emailValue.length < 5) {
    emailErrorContainer.innerHTML = '<p>Cel putin 5 caractere necesare</p>';
  } else {
    emailErrorContainer.innerHTML = '';
  }
});


const form = document.querySelector('form');

form.addEventListener('submit', (event)=> {

  event.preventDefault();
  console.log('submit');

  const emailValue = emailInput.value;
  const phoneValue = phoneInput.value;

  console.log(emailValue, ' , ', phoneValue);

  emailInput.value = '';
  phoneInput.value = '12345';
  emailErrorContainer.innerHTML = '';
  phoneErrorContainer.innerHTML = '';
});

// 1. UI 
// 1.1 zona de calculator (div height / width )
// 1.2 input field disabled ca display 
// 1.3 butoane 

// 2. functionalitatea 
// 
