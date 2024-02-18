export type Suit = 'CLUBS' | 'DIAMONDS' | 'HEARTS' | 'SPADES'

export enum CardValue {
  TWO = 2,
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
  ACE,
}

export interface Card {
  value: CardValue
  suit: Suit
  isEqual(card: Card): boolean
}

export class CardImp implements Card {
  constructor(
    readonly value: CardValue,
    readonly suit: Suit,
  ) {}

  isEqual(card: Card) {
    return this.suit === card.suit && this.value === card.value
  }
}
