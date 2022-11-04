const phoneInput = document.getElementById('phoneInput');
const phoneErrorContainer = document.getElementById('phoneError');

function handlePhoneChange(event) {
  const phoneValue = event.target.value;
  console.log('phoneValue:', phoneValue);

  // Daca valoarea introdusa in input nu este una numerica, afisam mesajul de eroare.
  if(isNaN(phoneValue)) {
    phoneErrorContainer.innerHTML = '<p>Doar numere permise </p>'
  } else {
    phoneErrorContainer.innerHTML = '';
  }
}

// Evenimentul "input" se produce la fiecare modificare din interiorul inputului.
phoneInput.addEventListener('input', handlePhoneChange);




const emailInput = document.getElementById('emailInput');
const emailErrorContainer = document.getElementById('emailError');

// Evenimentul "change" se produce atunci cand se modifica continutul inputului, doar dupa ce userul a parasit inputul (ex: da click in alta parte).
emailInput.addEventListener('change', (event) => {
  // event.target este inputul de la care se declanseaza evenimentul. Ce a tastat userul se regaseste in atributul value, al inputului.
  const emailValue =  event.target.value;

  console.log('emailValue:', emailValue);
  if(emailValue.length < 5) {
    emailErrorContainer.innerHTML = '<p>Cel putin 5 caractere necesare</p>';
  } else {
    emailErrorContainer.innerHTML = '';
  }
});


const form = document.querySelector('form');

// Evenimentul "submit" se declanseaza cand dam click pe butonul de submit. Target-ul sau este formularul.
form.addEventListener('submit', (event)=> {

  // Comportamentul default al eventului de submit este sa dea refresh la pagina. Nu vrem asta, asa ca prevenim acest comportament.
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

