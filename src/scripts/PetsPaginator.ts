import { IPet, quantityCardsOnPage } from '../utils/constans';

type petsRenderFunction = (petsPageMass: IPet[]) => void;

export class PetsPaginator {
    public _allPetsButtonTotalLeft: HTMLButtonElement | null;
    public _allPetsButtonLeft: HTMLButtonElement | null;
    public _allPetsCount: HTMLElement | null;
    public _allPetsButtonTotalRight: HTMLButtonElement | null;
    public _allPetsButtonRight: HTMLButtonElement | null;
    public _petsRender: petsRenderFunction;
    public count: number;
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

    totalLeftScroll = () => {
        this.count = 1;
        this.handleRender(this.count);
    };

    totalRightScroll = () => {
        this.count = this.pets.length / quantityCardsOnPage;
        this.handleRender(this.count);
    };

    leftScroll = () => {
        this.count--;
        this.handleRender(this.count);
    };

    rightScroll = () => {
        this.count++;
        this.handleRender(this.count);
    };

    setRightButtonsState(state: boolean) {
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
    }

    setLeftButtonsState(state: boolean) {
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
    }

    setButtonsState() {
        if (this.count === this.pets.length / quantityCardsOnPage) {
            this.setRightButtonsState(true);
            this.setLeftButtonsState(false);
        } else if (this.count > 1) {
            this.setLeftButtonsState(false);
            this.setRightButtonsState(false);
        } else {
            this.setLeftButtonsState(true);
            this.setRightButtonsState(false);
        }
    }

    handleRender = (count: number) => {
        console.log(count, 'count');
        if (!this._allPetsCount) throw new Error('allPetsCount is null');
        this._allPetsCount.textContent = this.count.toString();
        const petsPageMass = this.pets.slice(
            quantityCardsOnPage * (this.count - 1),
            quantityCardsOnPage * (this.count - 1) + quantityCardsOnPage
        );
        this.setButtonsState();
        this._petsRender(petsPageMass);
    };

    resizeRender = () => {
        if (this.count > this.pets.length / quantityCardsOnPage) {
            this.count = this.pets.length / quantityCardsOnPage;
        }
        this.handleRender(this.count);
    };

    setButtonsListeners() {
        this._allPetsButtonTotalLeft?.addEventListener('click', this.totalLeftScroll);
        this._allPetsButtonLeft?.addEventListener('click', this.leftScroll);
        this._allPetsButtonTotalRight?.addEventListener('click', this.totalRightScroll);
        this._allPetsButtonRight?.addEventListener('click', this.rightScroll);
        window.addEventListener('resize', this.resizeRender);
    }
}
