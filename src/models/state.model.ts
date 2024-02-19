import { PlayedGroup, PlayingGroup, UnplayedGroup } from './group.model'
import { Hokm, PlayerIndex } from './player.model'
import { EndScoreBoard, ScoreBoard } from './score.model'

export interface NewSetState {
  __state: 'NEW_SET'
  players: UnplayedGroup
  startingPlayerIndex: PlayerIndex
  Hokm: null
  SetScore: ScoreBoard
  gameScore: ScoreBoard
}

export interface NewRoundState {
  __state: 'NEW_ROUND'
  players: UnplayedGroup
  startingPlayerIndex: PlayerIndex
  Hokm: Hokm
  SetScore: ScoreBoard
  gameScore: ScoreBoard
}

export interface PlayingRoundState {
  __state: 'PLAYING_ROUND'
  players: PlayingGroup
  startingPlayerIndex: PlayerIndex
  Hokm: Hokm
  SetScore: ScoreBoard
  gameScore: ScoreBoard
}

export interface EndRoundState {
  __state: 'END_ROUND'
  players: PlayedGroup
  startingPlayerIndex: PlayerIndex
  Hokm: Hokm
  SetScore: ScoreBoard
  gameScore: ScoreBoard
}

export interface EndSetState {
  __state: 'END_SET'
  players: PlayedGroup
  startingPlayerIndex: PlayerIndex
  Hokm: Hokm
  SetScore: EndScoreBoard
  gameScore: ScoreBoard
}

export interface EndGameState {
  __state: 'END_Game'
  players: PlayedGroup
  startingPlayerIndex: PlayerIndex
  Hokm: Hokm
  SetScore: EndScoreBoard
  gameScore: EndScoreBoard
}

export type State =
  | NewSetState
  | NewRoundState
  | PlayingRoundState
  | EndRoundState
  | EndSetState
  | EndGameState
