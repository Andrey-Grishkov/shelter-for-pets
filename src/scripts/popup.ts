export class Popup {
    public _popup: HTMLElement | null;
    public _openButton: HTMLElement | null;
    public _popupOpenSelector: string;
    public _popupClosedSelector: string;

    constructor(
        popupElement: HTMLElement | null,
        openButton: HTMLElement | null,
        popupOpenSelector: string,
        popupClosedSelector: string
    ) {
        this._popup = popupElement;
        this._openButton = openButton;
        this._popupOpenSelector = popupOpenSelector;
        this._popupClosedSelector = popupClosedSelector;
    }

    open() {
        this._popup?.classList.add(this._popupOpenSelector);
    }

    close() {
        this._popup?.classList.remove(this._popupOpenSelector);
    }

    setEventListeners(): void {
        this._openButton?.addEventListener('mousedown', (): void => {
            this.open();
        });
        this._popup?.addEventListener('mousedown', (evt): void => {
            if (
                (evt.target as Element)?.classList.contains(this._popupOpenSelector) ||
                (evt.target as Element)?.classList.contains(this._popupClosedSelector)
            ) {
                this.close();
            }
        });
    }
}
