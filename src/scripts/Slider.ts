export class Slider {
    public _sliderList: HTMLElement | null;
    public _sliderLeftButton: HTMLButtonElement | null;
    public _sliderRightButton: HTMLButtonElement | null;
    public offSet: number;

    constructor(
        sliderList: HTMLElement | null,
        sliderLeftButton: HTMLButtonElement | null,
        sliderRightButton: HTMLButtonElement | null
    ) {
        this._sliderList = sliderList;
        this._sliderLeftButton = sliderLeftButton;
        this._sliderRightButton = sliderRightButton;
        this.offSet = -360;
    }

    leftScroll = () => {
        console.log('Left');
        if (!this._sliderLeftButton) throw new Error('this._sliderLeftButton is null');
        this._sliderLeftButton.disabled = true;
        if (!this._sliderList) throw new Error('this._sliderList is null');
        const gapValue = parseFloat(window.getComputedStyle(this._sliderList).gap);
        this.offSet = this.offSet + 270 + gapValue;
        // if (this.offSet > 0) {
        //     this.offSet = -(5 * 270 + 5 * gapValue);
        // }
        this._sliderList.classList.add('slider__cards-list_transition');
        this._sliderList.style.left = this.offSet + 'px';

        const timerSlide = setTimeout(() => {
            if (!this._sliderList) throw new Error('this._sliderList is null');
            const currentElement = this._sliderList.lastElementChild;
            if (!currentElement) throw new Error('currentElement is null');
            this._sliderList.classList.remove('slider__cards-list_transition');
            this._sliderList.prepend(currentElement);
            this.offSet = -360;
            this._sliderList.style.left = this.offSet + 'px';
            if (!this._sliderLeftButton) throw new Error('this._sliderLeftButton is null');
            this._sliderLeftButton.disabled = false;
            clearTimeout(timerSlide);
        }, 400);
    };

    rightScroll = () => {
        console.log('right');
        if (!this._sliderRightButton) throw new Error('this._sliderLeftButton is null');
        this._sliderRightButton.disabled = true;
        if (!this._sliderList) throw new Error('this._sliderList is null');
        const gapValue = parseFloat(window.getComputedStyle(this._sliderList).gap);
        this.offSet = this.offSet - 270 - gapValue;
        // if (this.offSet < -(5 * 270 + 5 * gapValue)) {
        //     this.offSet = 0;
        // }
        this._sliderList.classList.add('slider__cards-list_transition');
        this._sliderList.style.left = this.offSet + 'px';

        const timerSlide = setTimeout(() => {
            if (!this._sliderList) throw new Error('this._sliderList is null');
            const currentElement = this._sliderList.firstElementChild;
            if (!currentElement) throw new Error('currentElement is null');
            this._sliderList.classList.remove('slider__cards-list_transition');
            this._sliderList.append(currentElement);
            this.offSet = -360;
            this._sliderList.style.left = this.offSet + 'px';
            if (!this._sliderRightButton) throw new Error('this._sliderLeftButton is null');
            this._sliderRightButton.disabled = false;
            clearTimeout(timerSlide);
        }, 400);
    };

    setButtonsListeners() {
        this._sliderLeftButton?.addEventListener('click', this.leftScroll);
        this._sliderRightButton?.addEventListener('click', this.rightScroll);
        if (!this._sliderList) throw new Error('this._sliderList is null');
    }
}
