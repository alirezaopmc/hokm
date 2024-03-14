import { WholeNumber } from '../utils/wholeNumber'
import { Brand } from './brand'
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
export type Hokm = Suit & Brand<'hokm'>
export type CardValue = (typeof cardValues)[number]

interface CardBase<V extends CardValue, S extends Suit> {
  readonly value: V
  readonly suit: S
}

export interface UnassignedCard<V extends CardValue, S extends Suit>
  extends CardBase<V, S> {
  status: 'UNASSIGNED'
}

export interface RemovedCard<V extends CardValue, S extends Suit>
  extends CardBase<V, S> {
  status: 'REMOVED'
}

export interface InHandCard<V extends CardValue, S extends Suit>
  extends CardBase<V, S> {
  status: 'IN_HAND'
  owner: User
}

export interface InMiddleCard<V extends CardValue, S extends Suit>
  extends CardBase<V, S> {
  status: 'IN_MIDDLE'
  owner: User
  moveNumber: WholeNumber
}

export interface CollectedCard<V extends CardValue, S extends Suit>
  extends CardBase<V, S> {
  status: 'COLLECTED'
  owner: User
  moveNumber: WholeNumber
}

export type Card<V extends CardValue, S extends Suit> =
  | UnassignedCard<V, S>
  | RemovedCard<V, S>
  | InHandCard<V, S>
  | InMiddleCard<V, S>
  | CollectedCard<V, S>
