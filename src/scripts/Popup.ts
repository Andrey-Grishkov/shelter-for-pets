export class Popup {
    protected _popup: HTMLElement | null;
    protected _openButton: HTMLElement | null;
    protected _popupOpenSelector: string;
    protected _popupClosedSelector: string;
    protected _pageElement: HTMLElement | null;
    protected _toggleButton: HTMLElement | null | undefined;
    protected _toggleButtonActiveSelector: string | undefined;

    constructor(
        popupElement: HTMLElement | null,
        openButton: HTMLElement | null,
        popupOpenSelector: string,
        popupClosedSelector: string,
        pageElement: HTMLElement | null,
        toggleButton?: HTMLElement | null | undefined,
        toggleButtonActiveSelector?: string | undefined
    ) {
        this._popup = popupElement;
        this._openButton = openButton;
        this._popupOpenSelector = popupOpenSelector;
        this._popupClosedSelector = popupClosedSelector;
        this._pageElement = pageElement;
        this._toggleButton = toggleButton;
        this._toggleButtonActiveSelector = toggleButtonActiveSelector;
    }

    public open() {
        this._popup?.classList.add(this._popupOpenSelector);
        document.body.style.overflow = 'hidden';
    }

    public toggle() {
        if (this._toggleButtonActiveSelector) this._openButton?.classList.toggle(this._toggleButtonActiveSelector);
        this._pageElement?.classList.toggle('page_hidden');
        this._popup?.classList.toggle(this._popupOpenSelector);
        if (!this._popup) throw new Error('this._popup dont find');
        // if (this._popup.classList.contains(this._popupOpenSelector)) {
        //     this._popup.style.right = '-320px';
        //     //this._popup.style.opacity = '0';
        //     console.log('sodergit');
        // } else {
        //     this._popup.classList.toggle(this._popupOpenSelector);
        // }
    }

    public close() {
        this._popup?.classList.remove(this._popupOpenSelector);
        document.body.style.overflow = '';
    }

    private _handlePopupClick = (evt: MouseEvent): void => {
        const target = evt.target as Element;
        if (
            target.classList.contains(this._popupOpenSelector) ||
            target.classList.contains(this._popupClosedSelector)
        ) {
            if (this._toggleButton) {
                this.toggle();
            } else {
                this.close();
            }
        }
    };

    protected _setEventListeners() {
        if (!this._toggleButton) {
            this._openButton?.addEventListener('mousedown', (): void => {
                this.open();
            });
        } else {
            this._toggleButton?.addEventListener('mousedown', (): void => {
                this.toggle();
            });
        }
        this._popup?.addEventListener('mousedown', this._handlePopupClick);
    }
}
