import { WholeNumber } from '../utils/wholeNumber'
import { User } from './user.model'

export const suits = ['CLUBS', 'DIAMONDS', 'HEARTS', 'SPADES'] as const
export const cardValues = [
  'ACE',
  'TWO',
  'THREE',
  'FOUR',
  'FIVE',
  'SIX',
  'SEVEN',
  'EIGHT',
  'NINE',
  'TEN',
  'JACK',
  'QUEEN',
  'KING',
] as const

export type Suit = (typeof suits)[number]
export type CardValue = (typeof cardValues)[number]
export type CardName = `${CardValue}_${Suit}`

interface CardBase<N extends CardName> {
  readonly name: N
}

export interface UnassignedCard<N extends CardName = CardName> extends CardBase<N> {
  status: 'UNASSIGNED'
}

export interface RemovedCard<N extends CardName = CardName> extends CardBase<N> {
  status: 'REMOVED'
}

export interface InHandCard<N extends CardName = CardName> extends CardBase<N> {
  status: 'IN_HAND'
  owner: User
}

export interface InMiddleCard<N extends CardName = CardName> extends CardBase<N> {
  status: 'IN_MIDDLE'
  owner: User
  moveNumber: WholeNumber
}

export interface CollectedCard<N extends CardName = CardName> extends CardBase<N> {
  status: 'COLLECTED'
  owner: User
  moveNumber: WholeNumber
}

export type Card<N extends CardName = CardName> =
  | UnassignedCard<N>
  | RemovedCard<N>
  | InHandCard<N>
  | InMiddleCard<N>
  | CollectedCard<N>
