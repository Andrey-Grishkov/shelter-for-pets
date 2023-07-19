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
    popupPetsOpenedSelector,
    popupPetsClosedSelector,
    cardTitle,
    cardSubTitle,
    cardDescription,
    ageText,
    inoculationsText,
    diseasesText,
    parasitesText,
    petsPopupImage,
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

function createCard(item: IPet) {
    const card = new Card(item, {
        selector: '.template-cards',
        handleCardClick: () => {
            const popupPets = new PopupPets(
                petsPopupElement,
                null,
                popupPetsOpenedSelector,
                popupPetsClosedSelector,
                cardTitle,
                cardSubTitle,
                cardDescription,
                ageText,
                inoculationsText,
                diseasesText,
                parasitesText,
                petsPopupImage
            );
            popupPets.openPetsPopup(item);
            popupPets.setEventListeners();
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
