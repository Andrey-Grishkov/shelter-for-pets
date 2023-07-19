import { IPet } from '../utils/constans';
type RendererFunction = (item: IPet) => void;

export class Section {
    public _renderer: (item: IPet) => void;
    public _selector: string;
    public _section: HTMLElement | null;
    public _items: IPet[] = [];

    constructor({ renderer }: { renderer: RendererFunction }, selector: string) {
        this._renderer = renderer;
        this._selector = selector;
        this._section = document.querySelector(this._selector);
    }

    renderCards(items: IPet[]) {
        this._items = items;
        this._items.reverse().forEach((item) => {
            this._renderer(item);
        });
    }

    addItem(item: Node) {
        this._section?.prepend(item);
    }
}
