import { Popup } from './Popup';

export class PopupBurger extends Popup {
    constructor(
        popupElement: HTMLElement | null,
        openButton: HTMLElement | null,
        popupOpenSelector: string,
        popupClosedSelector: string
    ) {
        super(popupElement, openButton, popupOpenSelector, popupClosedSelector);
    }

    open() {
        super.open();
    }

    close() {
        super.close();
    }

    setEventListeners() {
        super.setEventListeners();
    }
}
