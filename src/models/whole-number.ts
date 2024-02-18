import { Brand } from './brand'

export type WholeNumber = number & Brand<'whole_number'>

export const isWholeNumber = (num: number): num is WholeNumber =>
  num >= 0 && num % 1 === 0
