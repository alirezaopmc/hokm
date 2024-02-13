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

interface ICard {
  value: CardValue
  suit: Suit
}

export class Card implements ICard {
  constructor(
    readonly value: CardValue,
    readonly suit: Suit,
  ) {}

  isEqual(card: Card) {
    return this.suit === card.suit && this.value === card.value
  }
}
