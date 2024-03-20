import { FixedArray, NonEmptyArray } from '../types'
import { User } from './user.model'
import { Score } from './score.model'
import { Brand } from './brand'
import { State } from './state.model'

export type GameId = string & Brand<'game_id'>
export type PlayerCounts = 2 | 3 | 4 | 5 | 6

export interface Game<N extends PlayerCounts = PlayerCounts> {
  id: GameId
  users: FixedArray<User, N>
  states: NonEmptyArray<State>
  targetSetScore: Score
  targetGameScore: Score
}
