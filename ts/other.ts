export type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T
}

export type Maybe<T> = null | T
