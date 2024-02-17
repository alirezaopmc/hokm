import { Card } from './card.model'
import { Player } from './player.model'

interface TurnBase {
  turnIndex: number
  player: Player
}

export interface UnplayedTurn extends TurnBase {
  playedCard: null
}

export interface PlayedTurn extends TurnBase {
  playedCard: Card
}

export type Turn = UnplayedTurn | PlayedTurn
