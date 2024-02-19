import { Brand } from './brand'

export type Score = number & Brand<'score'>
export type TargetScore = number & Brand<'target_score'>

type EndScore = Score & Brand<'end_score'>

export interface ScoreBoard {
  team1: Score
  team2: Score
  target: TargetScore
}

export interface Team1EndScoreBoard {
  team1: EndScore
  team2: Score
  target: TargetScore
}

export interface Team2EndScoreBoard {
  team1: Score
  team2: EndScore
  target: TargetScore
}

export type EndScoreBoard = Team1EndScoreBoard | Team2EndScoreBoard

export const isScore = (score: number): score is Score =>
  score >= 0 && score % 1 === 0
export const isTargetScore = (score: number): score is TargetScore =>
  score >= 3 && score % 1 === 0

export const isTeam1Winner = (board: ScoreBoard): board is Team1EndScoreBoard =>
  board.team1 >= board.target
export const isTeam2Winner = (board: ScoreBoard): board is Team2EndScoreBoard =>
  board.team2 >= board.target
