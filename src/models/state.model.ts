import { Suit } from './card.model'
import { Deck } from './deck.model'
import { User } from './user.model'

export interface StartingState {
  deck: Deck
  hakem: User
  hokm: null
}

export interface PlayingState {
  deck: Deck
  hakem: User
  hokm: Suit
}

export type State = StartingState | PlayingState
