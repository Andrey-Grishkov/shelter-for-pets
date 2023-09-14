import { IPet, handleCardClickFunction } from '../utils/constans';

export class Card {
    protected _item: IPet;
    protected _name: string;
    protected _link: string;
    protected _type: string;
    protected _selector: string;
    protected _handleCardClick: handleCardClickFunction;
    protected _element: HTMLElement | null = null;
    protected _imageCard: HTMLImageElement | null = null;

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

    private _getItem = () => {
        const cardsTemplateElement: HTMLTemplateElement | null = document.querySelector(this._selector);
        if (!cardsTemplateElement) throw new Error('cardItem is null');
        const cardsTemplateElementContent = cardsTemplateElement.content;
        const cardItem: HTMLElement | null = cardsTemplateElementContent.querySelector('.card');
        if (!cardItem) throw new Error('cardItem is null');
        this._element = cardItem.cloneNode(true) as HTMLElement;
    };

    public generateCard = () => {
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
    };

    private _setEventListeners = () => {
        this._element?.addEventListener('click', () => {
            this._handleCardClick();
        });
    };
}
