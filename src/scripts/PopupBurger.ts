import { Popup } from './Popup';

export class PopupBurger extends Popup {
    _burgerMenuNavElement: HTMLElement | null;

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

    open() {
        super.open();
        this._burgerMenuNavElement?.classList.add('burger-popup__burger-menu_rotate');
    }

    close() {
        super.close();
        this._burgerMenuNavElement?.classList.remove('burger-popup__burger-menu_rotate');
    }
}
