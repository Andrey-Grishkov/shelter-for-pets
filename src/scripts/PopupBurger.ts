import { Popup } from './Popup';

export class PopupBurger extends Popup {
    protected _burgerMenuNavElement: HTMLElement | null;

    constructor(
        popupElement: HTMLElement | null,
        openButton: HTMLElement | null,
        popupOpenSelector: string,
        popupClosedSelector: string,
        pageElement: HTMLElement | null,
        burgerMenuNavElement: HTMLElement | null
    ) {
        super(popupElement, openButton, popupOpenSelector, popupClosedSelector, pageElement);
        this._burgerMenuNavElement = burgerMenuNavElement;
    }

    public open = () => {
        this._burgerMenuNavElement?.classList.add('burger-popup__burger-menu_rotate');
        super.open();
    };

    public close = () => {
        this._burgerMenuNavElement?.classList.remove('burger-popup__burger-menu_rotate');
        super.close();
    };

    protected _handleBurgerPopupClick = (evt: MouseEvent): void => {
        const target = evt.target as Element;

        if (target.classList.contains('burger-popup__link')) {
            evt.preventDefault();
            const href = target.getAttribute('href');
            if (href) {
                this.close();
                window.location.replace(href);
            }
        }
    };

    public setEventListeners = () => {
        this._popup?.addEventListener('mousedown', this._handleBurgerPopupClick);
        super._setEventListeners();
    };
}
