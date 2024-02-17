import { Player } from './player.model'

interface Score {
  teamId: string
  gameScore: number
  roundScore: number
}

export interface BaseState {
  players: Player[]
  hakem: Player
  scores: Score[]
}
