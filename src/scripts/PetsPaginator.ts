import { IPet, quantityCardsOnPage, petsRenderFunction } from '../utils/constans';

export class PetsPaginator {
    protected _allPetsButtonTotalLeft: HTMLButtonElement | null;
    protected _allPetsButtonLeft: HTMLButtonElement | null;
    protected _allPetsCount: HTMLElement | null;
    protected _allPetsButtonTotalRight: HTMLButtonElement | null;
    protected _allPetsButtonRight: HTMLButtonElement | null;
    protected _petsRender: petsRenderFunction;
    protected count: number;
    public quantityCardsOnPage: number;
    public pets: IPet[];

    constructor(
        { petsRender }: { petsRender: petsRenderFunction },
        allPetsButtonTotalLeft: HTMLButtonElement | null,
        allPetsButtonLeft: HTMLButtonElement | null,
        allPetsCount: HTMLElement | null,
        allPetsButtonTotalRight: HTMLButtonElement | null,
        allPetsButtonRight: HTMLButtonElement | null,
        pets: IPet[]
    ) {
        this._allPetsButtonTotalLeft = allPetsButtonTotalLeft;
        this._allPetsButtonLeft = allPetsButtonLeft;
        this._allPetsCount = allPetsCount;
        this._allPetsButtonTotalRight = allPetsButtonTotalRight;
        this._allPetsButtonRight = allPetsButtonRight;
        this._petsRender = petsRender;
        this.pets = pets;
        this.count = 1;
        this.quantityCardsOnPage = 6;
    }

    private _totalLeftScroll = () => {
        this.count = 1;
        this.handleRender();
    };

    private _totalRightScroll = () => {
        this.count = this.pets.length / quantityCardsOnPage;
        this.handleRender();
    };

    private _leftScroll = () => {
        this.count--;
        this.handleRender();
    };

    private _rightScroll = () => {
        this.count++;
        this.handleRender();
    };

    public handleRender = () => {
        if (!this._allPetsCount) throw new Error('allPetsCount is null');
        this._allPetsCount.textContent = this.count.toString();
        const petsPageMass = this.pets.slice(
            quantityCardsOnPage * (this.count - 1),
            quantityCardsOnPage * (this.count - 1) + quantityCardsOnPage
        );
        this._setButtonsState();
        this._petsRender(petsPageMass);
    };

    private _setButtonsState = () => {
        if (this.count === this.pets.length / quantityCardsOnPage) {
            this._setRightButtonsState(true);
            this._setLeftButtonsState(false);
        } else if (this.count > 1) {
            this._setLeftButtonsState(false);
            this._setRightButtonsState(false);
        } else {
            this._setLeftButtonsState(true);
            this._setRightButtonsState(false);
        }
    };

    private _setRightButtonsState = (state: boolean) => {
        if (!this._allPetsButtonTotalRight) throw new Error('this._allPetsButtonTotalRight is null');
        if (!this._allPetsButtonRight) throw new Error('_allPetsButtonRight is null');
        if (state) {
            this._allPetsButtonTotalRight.classList.add('all-pets__button_disabled');
            this._allPetsButtonTotalRight.disabled = true;
            this._allPetsButtonRight.classList.add('all-pets__button_disabled');
            this._allPetsButtonRight.disabled = true;
        } else {
            this._allPetsButtonTotalRight.classList.remove('all-pets__button_disabled');
            this._allPetsButtonTotalRight.disabled = false;
            this._allPetsButtonRight.classList.remove('all-pets__button_disabled');
            this._allPetsButtonRight.disabled = false;
        }
    };

    private _setLeftButtonsState = (state: boolean) => {
        if (!this._allPetsButtonTotalLeft) throw new Error('this._allPetsButtonTotalLeft is null');
        if (!this._allPetsButtonLeft) throw new Error('_allPetsButtonLeft is null');
        if (state) {
            this._allPetsButtonTotalLeft.classList.add('all-pets__button_disabled');
            this._allPetsButtonTotalLeft.disabled = true;
            this._allPetsButtonLeft.classList.add('all-pets__button_disabled');
            this._allPetsButtonLeft.disabled = true;
        } else {
            this._allPetsButtonTotalLeft.classList.remove('all-pets__button_disabled');
            this._allPetsButtonTotalLeft.disabled = false;
            this._allPetsButtonLeft.classList.remove('all-pets__button_disabled');
            this._allPetsButtonLeft.disabled = false;
        }
    };

    private _resizeRender = () => {
        if (this.count > this.pets.length / quantityCardsOnPage) {
            this.count = this.pets.length / quantityCardsOnPage;
        }
        this.handleRender();
    };

    public setButtonsListeners = () => {
        this._allPetsButtonTotalLeft?.addEventListener('click', this._totalLeftScroll);
        this._allPetsButtonLeft?.addEventListener('click', this._leftScroll);
        this._allPetsButtonTotalRight?.addEventListener('click', this._totalRightScroll);
        this._allPetsButtonRight?.addEventListener('click', this._rightScroll);
        window.addEventListener('resize', this._resizeRender);
    };
}
