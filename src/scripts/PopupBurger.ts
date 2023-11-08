import { Popup } from './Popup';

export class PopupBurger extends Popup {
    protected _burgerMenuElement: HTMLElement | null;
    protected _burgerMenuElements: NodeListOf<HTMLElement>;

    constructor(
        popupElement: HTMLElement | null,
        burgerMenuElements: NodeListOf<HTMLElement>,
        burgerMenuElement: HTMLElement | null,
        openButton: HTMLElement | null,
        popupOpenSelector: string,
        popupClosedSelector: string,
        pageElement: HTMLElement | null,
        toggleButtonActiveSelector: string
    ) {
        super(
            popupElement,
            openButton,
            popupOpenSelector,
            popupClosedSelector,
            pageElement,
            openButton,
            toggleButtonActiveSelector
        );
        this._burgerMenuElement = burgerMenuElement;
        this._burgerMenuElements = burgerMenuElements;
    }

    protected _handleBurgerPopupClick = (evt: MouseEvent): void => {
        const target = evt.target as Element;

        if (target.classList.contains('burger-popup__link')) {
            evt.preventDefault();
            const href = target.getAttribute('href');
            if (href) {
                this.toggle();
                window.location.replace(href);
            }
        }
    };

    public setEventListeners = () => {
        this._popup?.addEventListener('mousedown', this._handleBurgerPopupClick);
        super._setEventListeners();
    };
}
