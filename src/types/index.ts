export type FixedArray<T, Size extends number> = Size extends 0
  ? never[]
  : {
      0: T
      length: Size
    } & ReadonlyArray<T>

export type NonEmptyArray<T> = [T, ...T[]]