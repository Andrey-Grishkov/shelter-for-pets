import { Popup } from './Popup';
import { IPet } from '../utils/constans';

export class PopupPets extends Popup {
    constructor(
        popupElement: HTMLElement | null,
        openButton: HTMLElement | null,
        popupOpenSelector: string,
        popupClosedSelector: string
    ) {
        super(popupElement, openButton, popupOpenSelector, popupClosedSelector);
    }

    openPetsPopup(item: IPet): void {
        console.log(item);
        super.open();
    }

    close() {
        super.close();
    }

    setEventListeners() {
        super.setEventListeners();
    }
}
