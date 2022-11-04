// 3.1 buton din DOM
// 3.2 adaugat event listener pt. 'click'
// 3.3 functie (arrow function) care scroleaza pagina sus

const scrollToTopButton = document.querySelector('#goToTopButton');

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', (event) => {
  console.log(' salut');
  console.log(' window.scrollY:', window.scrollY);

  if(window.scrollY > 100) {
    scrollToTopButton.style.visibility = 'visible';
  } else {
    scrollToTopButton.style.visibility = 'hidden';
  }
  // if( event.target === window ) {
  //   console.log(' sunt la fel');
  // }
});
