type petsRenderFunction = (count: number) => void;

export class PetsPaginator {
    public _allPetsButtonTotalLeft: HTMLButtonElement | null;
    public _allPetsButtonLeft: HTMLButtonElement | null;
    public _allPetsCount: HTMLElement | null;
    public _allPetsButtonTotalRight: HTMLButtonElement | null;
    public _allPetsButtonRight: HTMLButtonElement | null;
    public _petsRender: petsRenderFunction;
    public count: number;

    constructor(
        { petsRender }: { petsRender: petsRenderFunction },
        allPetsButtonTotalLeft: HTMLButtonElement | null,
        allPetsButtonLeft: HTMLButtonElement | null,
        allPetsCount: HTMLElement | null,
        allPetsButtonTotalRight: HTMLButtonElement | null,
        allPetsButtonRight: HTMLButtonElement | null
    ) {
        this._allPetsButtonTotalLeft = allPetsButtonTotalLeft;
        this._allPetsButtonLeft = allPetsButtonLeft;
        this._allPetsCount = allPetsCount;
        this._allPetsButtonTotalRight = allPetsButtonTotalRight;
        this._allPetsButtonRight = allPetsButtonRight;
        this._petsRender = petsRender;
        this.count = 1;
    }

    totalLeftScroll = () => {
        console.log('Total Left');
    };

    totalRightScroll = () => {
        console.log('Total right');
    };

    leftScroll = () => {
        console.log('Left');
        this.count--;
        this.handleRender(this.count);
    };

    rightScroll = () => {
        console.log('right');
        this.count++;
        this.handleRender(this.count);
    };

    handleRender = (count: number) => {
        console.log(count);
        this._petsRender(count);
    };

    setButtonsListeners() {
        this._allPetsButtonTotalLeft?.addEventListener('click', this.totalLeftScroll);
        this._allPetsButtonLeft?.addEventListener('click', this.leftScroll);
        this._allPetsButtonTotalRight?.addEventListener('click', this.totalRightScroll);
        this._allPetsButtonRight?.addEventListener('click', this.rightScroll);
    }
}
