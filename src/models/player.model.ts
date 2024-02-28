import { Brand } from './brand'
import { Suit } from './card.model'

export type PlayerId = string & Brand<'player_id'>
export type HakemId = string & Brand<'hakem_id'>
export type Hokm = Suit & Brand<'hokm'>

export interface RegularPlayer {
  readonly isHakem: false
  readonly id: PlayerId
}

export interface Hakem {
  readonly isHakem: true
  readonly id: HakemId
  setHokm(suit: Suit): Hokm
}

export type Player = Hakem | RegularPlayer

export class RegularPlayerImp implements RegularPlayer {
  readonly isHakem = false

  constructor(public id: PlayerId) {}
}

export class HakemImp implements Hakem {
  readonly isHakem = true

  constructor(public id: HakemId) {}

  setHokm(suit: Suit) {
    return suit as Hokm
  }
}
