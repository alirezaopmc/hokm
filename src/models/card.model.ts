import { Player } from './player.model'

export type Suit = 'CLUBS' | 'DIAMONDS' | 'HEARTS' | 'SPADES'

export enum CardValue {
  ACE = 1,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  TEN,
  JACK,
  QUEEN,
  KING,
}

interface CardBase {
  value: CardValue
  suit: Suit
}

export interface UnassignedCard extends CardBase {
  status: 'UNASSIGNED'
  assign(owner: Player): InHandCard
  remove(): RemovedCard
}

export interface RemovedCard extends CardBase {
  status: 'REMOVED'
}

export interface InHandCard extends CardBase {
  status: 'IN_HAND'
  owner: Player
  play(): InMiddleCard
}

export interface InMiddleCard extends CardBase {
  status: 'IN_MIDDLE'
  owner: Player
  collect(): CollectedCard
}

export interface CollectedCard extends CardBase {
  status: 'COLLECTED'
  owner: Player
}

export type card =
  | UnassignedCard
  | RemovedCard
  | InHandCard
  | InMiddleCard
  | CollectedCard

export class InHandCardImp implements InHandCard {
  public readonly status = 'IN_HAND'

  constructor(
    public readonly value: CardValue,
    public readonly suit: Suit,
    public readonly owner: Player,
  ) {}

  play() {
    return new InMiddleCardImp(this.value, this.suit, this.owner)
  }
}

export class InMiddleCardImp implements InMiddleCard {
  public readonly status = 'IN_MIDDLE'

  constructor(
    public readonly value: CardValue,
    public readonly suit: Suit,
    public readonly owner: Player,
  ) {}

  collect() {
    return new CollectedCardImp(this.value, this.suit, this.owner)
  }
}

export class CollectedCardImp implements CollectedCard {
  readonly status = 'COLLECTED'

  constructor(
    public readonly value: CardValue,
    public readonly suit: Suit,
    public readonly owner: Player,
  ) {}
}
