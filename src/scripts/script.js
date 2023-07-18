import { pets } from "./constans.ts"

//_________________________ПОПАП БУРГЕР МЕНЮ__________________________________________
const popupBurger = document.querySelector('.burger-popup');
const burgerMenu = document.querySelector('.header__burger-menu');
const burgerMenuNav = document.querySelector('.burger-popup__burger-menu');
const page = document.querySelector('.page');
const petsPopup = document.querySelector('.pets-popup');

//Открытие и закрытие по бургер меню
function toggleBurgerMenu () {
  popupBurger.classList.toggle('burger-popup_opened');
  burgerMenuNav.classList.toggle("burger-popup__burger-menu_rotate");
  page.classList.toggle("page_hidden");
}

//Закрытие
function closePopup() {
  popupBurger.classList.remove('burger-popup_opened');
  page.classList.remove("page_hidden");
  petsPopup.classList.remove('pets-popup_opened');
}

//Слушатель по евентам в попапе - Закрытие по ссылке и по клику не по попапу
popupBurger.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('burger-popup_opened')) {
      closePopup();
    }
  if (evt.target.classList.contains('burger-popup__link')) {
    evt.preventDefault();
    const href = evt.target.getAttribute('href');
    closePopup();
    window.location.replace(href);
  }
  })

burgerMenu.addEventListener('click', toggleBurgerMenu);
burgerMenuNav.addEventListener('click', toggleBurgerMenu);
//_________________________________________________________________________


console.log(consts)
console.log(consts[0].name)

const cardTitle = document.querySelector('.pets-popup__title');
const cardSubTitle = document.querySelector('.pets-popup__subtitle');
const cardDescription = document.querySelector('.pets-popup__description');
const ageText = document.getElementById('pets-popup-age-text');
const inoculationsText = document.getElementById('pets-popup-inoculations-text');
const diseasesText = document.getElementById('pets-popup-diseases-text');
const parasitesText = document.getElementById('pets-popup-parasites-text');
const petsPopupClose = document.querySelector('.pets-popup__close');
const cards = document.querySelectorAll(".card");
const petsPopupImage = document.querySelector('.pets-popup__image');


cards.forEach((card)=>{

  card.addEventListener('mousedown', (evt) => {
    const indexPets = card.getAttribute('id');
    petsPopupImage.setAttribute("src", consts[indexPets].img)
    cardTitle.innerText = consts[indexPets].name;
    cardSubTitle.innerText = `${consts[indexPets].type} - ${consts[indexPets].breed}`;
    cardDescription.innerText = consts[indexPets].description;
    ageText.innerText = consts[indexPets].age;
    inoculationsText.innerText = consts[indexPets].inoculations;
    diseasesText.innerText = consts[indexPets].diseases;
    parasitesText.innerText = consts[indexPets].parasites;
    openPopup(card)
  }
  )

})


function openPopup(card) {
  console.log(card, "card");
  petsPopup.classList.add('pets-popup_opened');
  //page.classList.add("page_hidden");
}

petsPopup.addEventListener('mousedown', (evt) => {
  console.log('closeFunk')
  if (evt.target.classList.contains('pets-popup_opened')) {
    closePopup();
  }
  if (evt.target.classList.contains('pets-popup__close') || evt.target.classList.contains('pets-popup__close-image')) {
    console.log('Privet')
    evt.preventDefault();
    closePopup();
  }
})



