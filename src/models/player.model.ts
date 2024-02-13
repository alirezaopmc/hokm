import { Card, Suit } from './card.model'

interface IPlayer {
  readonly id: string
  readonly cards: Card[]
  play(card: Card, playingSuit: Suit): Player
  freePlay(card: Card): Player
}

export class Player implements IPlayer {
  constructor(
    readonly id: string,
    readonly cards: Card[],
  ) {}

  play(card: Card, playingSuit: Suit) {
    const playable = this.getPlayableCards(playingSuit)
    const availableCard = playable.filter((item) => item.isEqual(card))

    if (availableCard.length === 0) {
      throw new Error('INVALID_CARD')
    }

    return this.freePlay(card)
  }

  freePlay(card: Card) {
    const newCards = this.filter(card)

    return new Player(this.id, newCards)
  }

  private getPlayableCards(playingSuit: Suit) {
    const suitCards = this.cards.filter((card) => card.suit === playingSuit)

    return suitCards.length > 0 ? suitCards : this.cards
  }

  private filter(card: Card) {
    return this.cards.filter((item) => !item.isEqual(card))
  }
}
