import { Card, Hokm } from './card.model'
import { Deck } from './deck.model'
import { Player } from './player.model'
import { ScoreBoard } from './score.model'

export type FixedSizeArray<T, N extends number> = N extends 0
  ? never[]
  : {
      0: T
      length: N
    } & ReadonlyArray<T>

type PlayerCounts = 2 | 3 | 4 | 5 | 6;

export interface State {
  deck: Deck
  hakem: Player
  hokm: Hokm | null
  SetScore: ScoreBoard
  gameScore: ScoreBoard
}

export interface Game<N extends PlayerCounts> {
  id: string;
  players: FixedSizeArray<Player, N>
  state: State;
  history: FixedSizeArray<Card, N>[]
}