export class Popup {
    protected _popup: HTMLElement | null;
    protected _openButton: HTMLElement | null;
    protected _popupOpenSelector: string;
    protected _popupClosedSelector: string;
    protected _pageElement: HTMLElement | null;

    constructor(
        popupElement: HTMLElement | null,
        openButton: HTMLElement | null,
        popupOpenSelector: string,
        popupClosedSelector: string,
        pageElement: HTMLElement | null
    ) {
        this._popup = popupElement;
        this._openButton = openButton;
        this._popupOpenSelector = popupOpenSelector;
        this._popupClosedSelector = popupClosedSelector;
        this._pageElement = pageElement;
    }

    public open() {
        this._pageElement?.classList.add('page_hidden');
        this._popup?.classList.add(this._popupOpenSelector);
    }

    public close() {
        this._pageElement?.classList.remove('page_hidden');
        this._popup?.classList.remove(this._popupOpenSelector);
    }

    private _handlePopupClick = (evt: MouseEvent): void => {
        const target = evt.target as Element;
        if (
            target.classList.contains(this._popupOpenSelector) ||
            target.classList.contains(this._popupClosedSelector)
        ) {
            this.close();
        }
    };

    protected _setEventListeners() {
        this._openButton?.addEventListener('mousedown', (): void => {
            this.open();
        });
        this._popup?.addEventListener('mousedown', this._handlePopupClick);
    }
}
