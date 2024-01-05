import Fuse, { IFuseOptions } from 'fuse.js'

export default class Search<T> {
    instance: Fuse<T> = new Fuse<T>([], this.options)

    constructor(items: ReadonlyArray<T> = [], options: SearchOptions<T> = {}) {
        this.options = options
        this.items = items
    }

    private _options: SearchOptions<T> = {
        minMatchCharLength: 1,
        threshold: 0.4,
        location: 0,
        distance: 100,
    }

    get options(): SearchOptions<T> {
        return this._options
    }

    set options(value: SearchOptions<T>) {
        this._options = {
            ...this._options,
            ...value,
        }
    }

    private _items: ReadonlyArray<T> = []

    get items(): ReadonlyArray<T> {
        return this._items || []
    }

    set items(value: ReadonlyArray<T>) {
        this._items = value
        this.instance = new Fuse<T>(this.items, this.options)
    }

    search(searchTerm: string): ReadonlyArray<T> {
        if (searchTerm && this.instance) {
            return this.instance.search(searchTerm).map((r) => r.item)
        }
        return this.items
    }
}

export interface SearchOptions<T> extends IFuseOptions<T> {}
