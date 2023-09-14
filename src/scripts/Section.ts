import { IPet, RendererFunction } from '../utils/constans';

export class Section {
    public renderer: (item: IPet) => void;
    private _selector: string;
    private _section: HTMLElement | null;
    private _items: IPet[] = [];

    constructor({ renderer }: { renderer: RendererFunction }, selector: string) {
        this.renderer = renderer;
        this._selector = selector;
        this._section = document.querySelector(this._selector);
    }

    public renderCards = (items: IPet[]) => {
        this._items = items;
        this._items.forEach((item) => {
            this.renderer(item);
        });
    };

    public addItem = (item: Node) => {
        this._section?.append(item);
    };
}
