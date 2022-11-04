// 3.1 buton din DOM
// 3.2 adaugat event listener pt. 'click'
// 3.3 functie (arrow function) care scroleaza pagina sus

const scrollToTopButton = document.querySelector('#goToTopButton');

scrollToTopButton.addEventListener('click', () => {
  // Functia scrollTo este o functie predefinita.
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

// Eventul de scroll se declanseaza de fiecare data cand scrollam.
window.addEventListener('scroll', (event) => {
  console.log(' salut');
  // Proprietatea scrollY reprezinta numarul de pizeli scrollati pe axa OY (cand nu am scrollat deloc este 0).
  console.log(' window.scrollY:', window.scrollY);

  if(window.scrollY > 100) {
    scrollToTopButton.style.visibility = 'visible';
  } else {
    scrollToTopButton.style.visibility = 'hidden';
  }
});
