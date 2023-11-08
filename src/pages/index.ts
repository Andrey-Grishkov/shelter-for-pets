import './styles.scss';
import {
    pets,
    popupBurgerElement,
    burgerMenuElements,
    burgerMenuElement,
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
    sliderList,
    sliderLeftButton,
    sliderRightButton,
    IPet,
    allPetsButtonTotalLeft,
    allPetsButtonLeft,
    allPetsCount,
    allPetsButtonTotalRight,
    allPetsButtonRight,
    sliderListSelector,
    allPetsListSelector,
    templateCardsSelector,
    petsList,
    quantityCardsOnPage,
    toggleButtonActiveSelector,
} from '../utils/constans';
import { PopupBurger } from '../scripts/PopupBurger';
import { PopupPets } from '../scripts/PopupPets';
import { Section } from '../scripts/Section';
import { Card } from '../scripts/Card';
import { Slider } from '../scripts/Slider';
import { PetsPaginator } from '../scripts/PetsPaginator';

const popupBurger = new PopupBurger(
    popupBurgerElement,
    burgerMenuElements,
    burgerMenuElement,
    burgerMenuElement,
    popupBurgerOpenedSelector,
    popupBurgerClosedSelector,
    pageElement,
    toggleButtonActiveSelector
);
popupBurger.setEventListeners();

const createCard = (item: IPet) => {
    const card = new Card(item, {
        selector: templateCardsSelector,
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
                petsPopupImage,
                pageElement
            );
            popupPets.openPetsPopup(item);
            popupPets.setEventListeners();
        },
    });
    const cardElement = card.generateCard();
    return cardElement;
};

if (sliderList) {
    const sectionCards = new Section(
        {
            renderer: (item: IPet): void => {
                sectionCards.addItem(createCard(item));
            },
        },
        sliderListSelector
    );

    sectionCards.renderCards(pets);

    const slider = new Slider(sliderList, sliderLeftButton, sliderRightButton);
    slider.setButtonsListeners();
}

if (petsList) {
    const sectionCardsPets = new Section(
        {
            renderer: (item: IPet): void => {
                sectionCardsPets.addItem(createCard(item));
            },
        },
        allPetsListSelector
    );

    sectionCardsPets.renderCards(pets.slice(0, quantityCardsOnPage));

    const paginator = new PetsPaginator(
        {
            petsRender: (petsPageMass: IPet[]): void => {
                if (!petsList) throw new Error('petsList is null');
                petsList.textContent = '';
                sectionCardsPets.renderCards(petsPageMass);
            },
        },
        allPetsButtonTotalLeft,
        allPetsButtonLeft,
        allPetsCount,
        allPetsButtonTotalRight,
        allPetsButtonRight,
        pets,
        petsList
    );

    paginator.setButtonsListeners();
}
