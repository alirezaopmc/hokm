import { Card } from './card.model'
import { Hakem, Player } from './player.model'

interface UnplayedTurn<P extends Player> {
  player: P
  playedCard: null
}

interface PlayedTurn<P extends Player> {
  player: P
  playedCard: Card
}

type Turn<P extends Player> = UnplayedTurn<P> | PlayedTurn<P>

export type UnplayedGroup = [
  UnplayedTurn<Hakem>,
  UnplayedTurn<Player>,
  UnplayedTurn<Player>,
  UnplayedTurn<Player>,
]

export type PlayedGroup = [
  PlayedTurn<Hakem>,
  PlayedTurn<Player>,
  PlayedTurn<Player>,
  PlayedTurn<Player>,
]

export type PlayingGroup = [
  Turn<Hakem>,
  Turn<Player>,
  Turn<Player>,
  Turn<Player>,
]