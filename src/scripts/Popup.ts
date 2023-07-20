export class Popup {
    public _popup: HTMLElement | null;
    public _openButton: HTMLElement | null;
    public _popupOpenSelector: string;
    public _popupClosedSelector: string;
    public _pageElement: HTMLElement | null;

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

    open() {
        this._pageElement?.classList.add('page_hidden');
        this._popup?.classList.add(this._popupOpenSelector);
    }

    close() {
        this._pageElement?.classList.remove('page_hidden');
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
            // if ((evt.target as Element)?.classList.contains('burger-popup__link')) {
            //     evt.preventDefault();
            //     const href: string | null = (evt.target as Element)?.getAttribute('href');
            //     this.close();
            //     if (href) {
            //         window.location.replace(href);
            //     }
            // }
        });
    }
}
