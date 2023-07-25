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
} from './utils/constans';
import { PopupBurger } from './scripts/PopupBurger';
import { PopupPets } from './scripts/PopupPets';
import { Section } from './scripts/Section';
import { Card } from './scripts/Card';
import { Slider } from './scripts/Slider';
import { PetsPaginator } from './scripts/PetsPaginator';

const popupBurger = new PopupBurger(
    popupBurgerElement,
    burgerMenuElement,
    popupBurgerOpenedSelector,
    popupBurgerClosedSelector,
    pageElement,
    burgerMenuNavElement
);
popupBurger.setEventListeners();

function createCard(item: IPet) {
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
}

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

const sectionCardsPets = new Section(
    {
        renderer: (item: IPet): void => {
            sectionCardsPets.addItem(createCard(item));
        },
    },
    allPetsListSelector
);

sectionCardsPets.renderCards(pets);

const paginator = new PetsPaginator(
    {
        petsRender: (count: number): void => {
            if (!allPetsCount) throw new Error('allPetsCount is null');
            if (!petsList) throw new Error('petsList is null');
            allPetsCount.textContent = count.toString();
            petsList.textContent = '';
            sectionCardsPets.renderCards(pets.slice(0, pets.length - count));
            console.log(pets.slice(0, pets.length - count));
        },
    },
    allPetsButtonTotalLeft,
    allPetsButtonLeft,
    allPetsCount,
    allPetsButtonTotalRight,
    allPetsButtonRight
);

paginator.setButtonsListeners();
