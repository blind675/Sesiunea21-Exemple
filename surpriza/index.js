// 2. click pe buton 

// 2.1 gasit elementul buton din DOM
// 2.2 creat o functie care trateaza evenimentul de click
// 2.3 setat un event listener pentru 'click'

const button = document.getElementById('btn');
const imageContainer = document.getElementById('imageContainer')

const images = [
  'https://image.shutterstock.com/image-photo/funny-large-longhair-gray-kitten-600w-1842198919.jpg',
  'https://image.shutterstock.com/image-photo/furry-friends-red-cat-corgi-600w-1992708143.jpg',
  'https://image.shutterstock.com/image-photo/row-tops-heads-cats-dogs-600w-1034939470.jpg',
  'https://image.shutterstock.com/image-photo/border-collie-dog-portrait-hiding-600w-1933485896.jpg'
];

function handleClickEvent() {
  const randomNumber = Math.random();
  const intervalPercent =  randomNumber * images.length

  // 0---1---2---3
  // 0.36

  const randomIndex = Math.floor(intervalPercent);
  const myPhotoURL = images[randomIndex];
  console.log(' randomNumber:', randomNumber);
  console.log(' intervalPercent:', intervalPercent);
  console.log(' randomIndex:', randomIndex);
  console.log(' myPhotoURL:', myPhotoURL);
  console.log('');

  imageContainer.innerHTML=`<img src="${myPhotoURL}" alt="random image">`
}

button.addEventListener('click', handleClickEvent);

