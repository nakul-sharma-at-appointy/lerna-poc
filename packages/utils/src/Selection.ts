export default class Selection<T> {
    /** Event emitted when the value has changed. */
    changed: ((_: SelectionChange<T>) => void) | undefined
    /** Currently-selected values. */
    private _selection = new Set<T>()
    /** Keeps track of the deselected options that haven't been emitted by the change event. */
    private _deselectedToEmit: T[] = []
    /** Keeps track of the selected options that haven't been emitted by the change event. */
    private _selectedToEmit: T[] = []

    constructor(
        private _multiple = false,
        initiallySelectedValues?: T[],
        private _emitChanges = true
    ) {
        if (initiallySelectedValues && initiallySelectedValues.length) {
            if (_multiple) {
                initiallySelectedValues.forEach((value: T) => this._markSelected(value))
            } else {
                this._markSelected(initiallySelectedValues[0])
            }

            // Clear the array in order to avoid firing the change event for preselected values.
            this._selectedToEmit.length = 0
        }
    }

    /** Cache for the array value of the selected items. */
    private _selected: T[] | null | undefined

    /** Selected values. */
    get selected(): T[] {
        if (!this._selected) {
            this._selected = Array.from(this._selection.values())
        }

        return this._selected
    }

    /**
     * Selects a value or an array of values.
     */
    select(...values: T[]): void {
        values.forEach((value: T) => this._markSelected(value))
        this._emitChangeEvent()
    }

    /**
     * Deselects a value or an array of values.
     */
    deselect(...values: T[]): void {
        values.forEach((value: T) => this._unmarkSelected(value))
        this._emitChangeEvent()
    }

    /**
     * Toggles a value between selected and deselected.
     */
    toggle(value: T): void {
        this.isSelected(value) ? this.deselect(value) : this.select(value)
    }

    /**
     * Clears all of the selected values.
     */
    clear(): void {
        this._unmarkAll()
        this._emitChangeEvent()
    }

    /**
     * Determines whether a value is selected.
     */
    isSelected(value: T): boolean {
        return this._selection.has(value)
    }

    /**
     * Determines whether the model does not have a value.
     */
    isEmpty(): boolean {
        return this._selection.size === 0
    }

    /**
     * Determines whether the all values are selected.
     */
    isAllSelected(values: T[]): boolean {
        return !values.find((i: T) => !this.isSelected(i))
    }

    /**
     * Determines whether the any of the values are selected.
     */
    isAnySelected(values: T[]): boolean {
        return !!values.find((i: T) => this.isSelected(i))
    }

    /**
     * Determines whether the model has a value.
     */
    hasValue(): boolean {
        return !this.isEmpty()
    }

    /**
     * Sorts the selected values based on a predicate function.
     */
    sort(predicate?: (a: T, b: T) => number): void {
        if (this._multiple && this.selected) {
            this._selected!.sort(predicate)
        }
    }

    /**
     * Gets whether multiple values can be selected.
     */
    isMultipleSelection() {
        return this._multiple
    }

    /** Emits a change event and clears the records of selected and deselected values. */
    private _emitChangeEvent() {
        // Clear the selected values so they can be re-cached.
        this._selected = null

        if (this.changed) {
            this.changed({
                source: this,
                added: this._selectedToEmit,
                removed: this._deselectedToEmit,
            })
        }

        this._deselectedToEmit = []
        this._selectedToEmit = []
    }

    /** Selects a value. */
    private _markSelected(value: T) {
        if (!this.isSelected(value)) {
            if (!this._multiple) {
                this._unmarkAll()
            }

            this._selection.add(value)

            if (this._emitChanges) {
                this._selectedToEmit.push(value)
            }
        }
    }

    /** Deselects a value. */
    private _unmarkSelected(value: T) {
        if (this.isSelected(value)) {
            this._selection.delete(value)

            if (this._emitChanges) {
                this._deselectedToEmit.push(value)
            }
        }
    }

    /** Clears out the selected values. */
    private _unmarkAll() {
        if (!this.isEmpty()) {
            this._selection.forEach((value: T) => this._unmarkSelected(value))
        }
    }
}

export interface SelectionChange<T> {
    source: Selection<T>
    added: T[]
    removed: T[]
}
