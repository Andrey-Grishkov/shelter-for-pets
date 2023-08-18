import { Popup } from './Popup';
import { IPet } from '../utils/constans';

export class PopupPets extends Popup {
    _cardTitle: HTMLElement | null;
    _cardSubTitle: HTMLElement | null;
    _cardDescription: HTMLElement | null;
    _ageText: HTMLElement | null;
    _inoculationsText: HTMLElement | null;
    _diseasesText: HTMLElement | null;
    _parasitesText: HTMLElement | null;
    _petsPopupImage: HTMLImageElement | null = null;

    constructor(
        popupElement: HTMLElement | null,
        openButton: HTMLElement | null,
        popupOpenSelector: string,
        popupClosedSelector: string,
        cardTitle: HTMLElement | null,
        cardSubTitle: HTMLElement | null,
        cardDescription: HTMLElement | null,
        ageText: HTMLElement | null,
        inoculationsText: HTMLElement | null,
        diseasesText: HTMLElement | null,
        parasitesText: HTMLElement | null,
        petsPopupImage: HTMLImageElement | null = null,
        pageElement: HTMLElement | null
    ) {
        super(popupElement, openButton, popupOpenSelector, popupClosedSelector, pageElement);
        this._cardTitle = cardTitle;
        this._cardSubTitle = cardSubTitle;
        this._cardDescription = cardDescription;
        this._ageText = ageText;
        this._inoculationsText = inoculationsText;
        this._diseasesText = diseasesText;
        this._parasitesText = parasitesText;
        this._petsPopupImage = petsPopupImage;
    }

    openPetsPopup(item: IPet): void {
        console.log(item);
        console.log(item.age);
        console.log(this._ageText);
        if (!this._cardTitle) throw new Error('this._cardTitle is null');
        this._cardTitle.innerText = item.name;
        if (!this._cardSubTitle) throw new Error('this._cardSubTitle is null');
        this._cardSubTitle.innerText = `${item.type} - ${item.breed}`;
        if (!this._cardDescription) throw new Error('_cardDescription is null');
        this._cardDescription.innerText = item.description;
        if (!this._ageText) throw new Error('this._ageText is null');
        this._ageText.innerText = item.age;
        if (!this._inoculationsText) throw new Error('this._inoculationsText is null');
        this._inoculationsText.innerText = item.inoculations.toString();
        if (!this._diseasesText) throw new Error('this._diseasesText is null');
        this._diseasesText.innerText = item.diseases.toString();
        if (!this._parasitesText) throw new Error('this._parasitesText is null');
        this._parasitesText.innerText = item.parasites.toString();
        if (!this._petsPopupImage) throw new Error('this._petsPopupImage is null');
        this._petsPopupImage.src = item.img;
        this._petsPopupImage.alt = item.type + ' ' + item.name;
        super.open();
    }
}
