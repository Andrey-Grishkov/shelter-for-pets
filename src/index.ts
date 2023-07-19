import './pages/styles.scss';
import {
    pets,
    popupBurgerElement,
    burgerMenuElement,
    burgerMenuNavElement,
    petsPopupElement,
    pageElement,
    popupBurgerOpenedSelector,
    popupBurgerClosedSelector,
    IPet,
} from './utils/constans';
import { PopupBurger } from './scripts/PopupBurger';
import { PopupPets } from './scripts/PopupPets';
import { Section } from './scripts/Section';
import { Card } from './scripts/Card';

const popupBurger = new PopupBurger(
    popupBurgerElement,
    burgerMenuElement,
    popupBurgerOpenedSelector,
    popupBurgerClosedSelector
);
popupBurger.setEventListeners();

const popupPets = new PopupPets(
    petsPopupElement,
    burgerMenuElement,
    popupBurgerOpenedSelector,
    popupBurgerClosedSelector
);
popupBurger.setEventListeners();

function createCard(item: IPet) {
    const card = new Card(item, {
        selector: '.template-cards',
        handleCardClick: () => {
            popupPets.openPetsPopup(item);
        },
    });
    const cardElement = card.generateCard();
    return cardElement;
}

const sectionCards = new Section(
    {
        renderer: (item: IPet): void => {
            sectionCards.addItem(createCard(item));
        },
    },
    '.slider__cards-container'
);

sectionCards.renderCards(pets);
