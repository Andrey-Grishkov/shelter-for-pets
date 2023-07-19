import { IPet } from '../utils/constans';
type handleCardClickFunction = () => void;

export class Card {
    public _item: IPet;
    public _name: string;
    public _link: string;
    public _type: string;
    public _selector: string;
    public _handleCardClick: handleCardClickFunction;
    public _element: HTMLElement | null = null;
    public _imageCard: HTMLImageElement | null = null;

    constructor(
        item: IPet,
        { selector, handleCardClick }: { selector: string; handleCardClick: handleCardClickFunction }
    ) {
        this._item = item;
        this._name = item.name;
        this._link = item.img;
        this._type = item.type;
        this._selector = selector;
        this._handleCardClick = handleCardClick;
    }

    _getItem() {
        console.log(this._item, 'this._item Card');
        const cardsTemplateElement: HTMLTemplateElement | null = document.querySelector(this._selector);
        if (!cardsTemplateElement) throw new Error('cardItem is null');
        const cardsTemplateElementContent = cardsTemplateElement.content;
        const cardItem: HTMLElement | null = cardsTemplateElementContent.querySelector('.card');
        if (!cardItem) throw new Error('cardItem is null');
        console.log(cardItem, 'cardItem Card');
        this._element = cardItem.cloneNode(true) as HTMLElement;
        console.log(this._element, 'this._element');
    }

    generateCard() {
        this._getItem();
        this._setEventListeners();
        if (!this._element) throw new Error('this._element is null');
        this._imageCard = this._element.querySelector('.card__image');
        if (!this._imageCard) throw new Error('this._imageCard is null');
        const cardTitle = this._element.querySelector('.card__title');
        if (cardTitle !== null) {
            cardTitle.textContent = this._name;
        }
        this._imageCard.src = this._link;
        this._imageCard.alt = this._type + ' ' + this._name;
        return this._element;
    }

    _setEventListeners() {
        this._element?.addEventListener('click', () => {
            this._handleCardClick();
        });
    }
}
