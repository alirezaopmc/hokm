declare const __brand: unique symbol
export type Brand<T extends string> = { [__brand]: { [K in T]: true } }
