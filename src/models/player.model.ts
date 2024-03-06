import { Brand } from './brand'
import { UserId } from './user'

export type PlayerId = UserId & Brand<'player_id'>

export interface Player {
  readonly id: PlayerId
  readonly gameId: string
}
