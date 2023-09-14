export class Slider {
    private _sliderList: HTMLElement | null;
    private _sliderLeftButton: HTMLButtonElement | null;
    private _sliderRightButton: HTMLButtonElement | null;
    private _offSet: number;
    private _gapValue: number;
    private _cardSize: number;
    private _animationTime: number;

    constructor(
        sliderList: HTMLElement | null,
        sliderLeftButton: HTMLButtonElement | null,
        sliderRightButton: HTMLButtonElement | null
    ) {
        this._sliderList = sliderList;
        this._sliderLeftButton = sliderLeftButton;
        this._sliderRightButton = sliderRightButton;
        this._offSet = -360;
        this._cardSize = 270;
        this._animationTime = 400;
        if (!this._sliderList) throw new Error('this._sliderList is null');
        this._gapValue = parseFloat(window.getComputedStyle(this._sliderList).gap);
    }

    private _infiniteSliderReplacer = (direction: string) => {
        if (!this._sliderList) throw new Error('this._sliderList is null');
        this._sliderList.classList.add('slider__cards-list_transition');
        this._sliderList.style.left = this._offSet + 'px';

        const timerSlide = setTimeout(() => {
            if (!this._sliderList) throw new Error('this._sliderList is null');
            if (direction === 'left') {
                const currentElement = this._sliderList.lastElementChild;
                if (!currentElement) throw new Error('currentElement is null');
                this._sliderList.classList.remove('slider__cards-list_transition');
                this._sliderList.prepend(currentElement);
            } else {
                const currentElement = this._sliderList.firstElementChild;
                if (!currentElement) throw new Error('currentElement is null');
                this._sliderList.classList.remove('slider__cards-list_transition');
                this._sliderList.append(currentElement);
            }
            this._renderCards();
            this._enableButtons();
            clearTimeout(timerSlide);
        }, this._animationTime);
    };

    private _enableButtons = () => {
        if (!this._sliderLeftButton) throw new Error('this._sliderLeftButton is null');
        if (!this._sliderRightButton) throw new Error('this._sliderLeftButton is null');
        this._sliderLeftButton.disabled = false;
        this._sliderRightButton.disabled = false;
    };

    private _disableButtons = () => {
        if (!this._sliderLeftButton) throw new Error('this._sliderLeftButton is null');
        if (!this._sliderRightButton) throw new Error('this._sliderLeftButton is null');
        this._sliderLeftButton.disabled = true;
        this._sliderRightButton.disabled = true;
    };

    private _leftScroll = () => {
        this._disableButtons();
        this._offSet = this._offSet + this._cardSize + this._gapValue;
        this._infiniteSliderReplacer('left');
    };

    private _rightScroll = () => {
        this._disableButtons();
        this._offSet = this._offSet - this._cardSize - this._gapValue;
        this._infiniteSliderReplacer('right');
    };

    private _renderCards = () => {
        if (!this._sliderList) throw new Error('this._sliderList is null');
        this._offSet = -(this._cardSize + this._gapValue);
        this._sliderList.style.left = this._offSet + 'px';
    };

    private _resizeRender = () => {
        if (!this._sliderList) throw new Error('this._sliderList is null');
        this._gapValue = parseFloat(window.getComputedStyle(this._sliderList).gap);
        this._renderCards();
    };

    public setButtonsListeners = () => {
        this._sliderLeftButton?.addEventListener('click', this._leftScroll);
        this._sliderRightButton?.addEventListener('click', this._rightScroll);
        window.addEventListener('resize', this._resizeRender);
    };
}
