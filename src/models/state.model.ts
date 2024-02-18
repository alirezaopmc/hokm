import { PlayingGroup, UnplayedGroup } from './group.model'
import { Hokm, PlayerIndex } from './player.model'
// import { WholeNumber } from './whole-number'

// interface Score {
//   team1: WholeNumber
//   team2: WholeNumber
//   target: WholeNumber
// }

export interface NewRoundState {
  __state: 'NEW_ROUND'
  players: UnplayedGroup
  startingPlayerIndex: PlayerIndex
  Hokm: null
}

export interface PlayingRoundState {
  __state: 'PLAYING_ROUND'
  players: PlayingGroup
  startingPlayerIndex: PlayerIndex
  Hokm: Hokm
}

export interface EndRoundState {
  __state: 'END_ROUND'
  players: PlayingGroup
  startingPlayerIndex: PlayerIndex
  Hokm: Hokm
}

export type RoundState =
  | NewRoundState
  | PlayingRoundState
  | EndRoundState