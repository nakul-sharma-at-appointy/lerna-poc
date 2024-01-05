import { merge, omit, sortBy, without } from 'lodash-es'
import { Primitive } from './types'

type IdSelector<T> = (model: T) => string
export type SortComparer<T> = (a: T) => Primitive

function isSortComparer<T>(comparer: any): comparer is SortComparer<T> {
    return comparer && comparer !== false
}

export interface EntityOptions<T> {
    selectId: IdSelector<T>
    sortComparer: false | SortComparer<T>
}

export interface EntityState<T> {
    ids: string[]
    entities: Record<string, T>
}

export type Predicate<T> = (entity: T) => boolean

export default class Entities<T> {

    state: EntityState<T> = {
        ids: [],
        entities: {},
    }

    constructor(input: T[] = [], options: Partial<EntityOptions<T>> = {}) {
        // @ts-ignore
        this.options = options
        this.setAll(input)
    }

    private _options: EntityOptions<T> = {
        selectId: (instance: any) => instance.id,
        sortComparer: false,
    }

    get options() {
        return this._options
    }

    set options(options) {
        this._options = {
            ...this._options,
            ...options,
        }
    }

    get value(): T[] {
        return this.sort(this.state.ids.map(id => this.state.entities[id]))
    }

    private _add(entity: T): void {
        const key = this.options.selectId(entity)
        if (!(key in this.state.entities)) {
            this.state.ids.push(key)
            this.state.entities[key] = entity
        }
    }

    addOne(entity: T): T[] {
        this._add(entity)
        return this.value
    }

    addMany(entities: T[]): T[] {
        for (const entity of entities) {
            this._add(entity)
        }
        return this.value
    }

    findOne(key: string): T {
        return this.state.entities[key]
    }

    findMany(keys: string[]): T[] {
        return keys.map(this.findOne)
    }

    setAll(entities: T[]): T[] {
        this.state.ids = []
        this.state.entities = {}
        return this.addMany(entities)
    }

    setOne(entity: T): T[] {
        const key = this.options.selectId(entity)

        if (key in this.state.entities) {
            this.state.entities[key] = entity
            return this.value
        }

        return this.addOne(entity)
    }

    removeOne(entity: T): T[] {
        return this.removeMany([entity])
    }

    removeMany(entitiesOrPredicate: T[] | Predicate<T>): T[] {
        const keys = entitiesOrPredicate instanceof Array ? entitiesOrPredicate.map(this.options.selectId) : this.state.ids.filter(key => entitiesOrPredicate(this.state.entities[key]))
        this.state.ids = without(this.state.ids, ...keys)
        this.state.entities = omit(this.state.entities, ...keys)
        return this.value
    }

    removeAll(): T[] {
        this.state = Object.assign({}, {
            ids: [],
            entities: {},
        })
        return this.value
    }

    updateOne(entity: Partial<T>) {
        return this.updateMany([entity])
    }

    updateMany(entities: Partial<T>[]) {
        // @ts-ignore
        const updates = entities.filter(entity => this.options.selectId(entity) in this.state.entities)
        updates.forEach(update => {
            // @ts-ignore
            const key = this.options.selectId(update)
            this.state.entities[key] = merge({}, this.state.entities[key], update)
        })
        return this.value
    }

    upsertOne(entity: T) {
        return this.upsertMany([entity])
    }

    upsertMany(entities: T[]) {
        const added: T[] = []
        const updated: T[] = []
        for (const entity of entities) {
            const key = this.options.selectId(entity)
            if (key in this.state.entities) {
                updated.push(entity)
            } else {
                added.push(entity)
            }
        }
        this.updateMany(updated)
        this.addMany(added)
        return this.value
    }

    private sort(input: T[]): T[] {
        const comparer = this.options.sortComparer
        if (isSortComparer<T>(comparer)) {
            return sortBy(input, comparer)
        }
        return input
    }
}

