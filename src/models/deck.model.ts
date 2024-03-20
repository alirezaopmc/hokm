import { Card, CardName } from './card.model'
import { unassignedDeckCards } from './unassignedDeckCards'

export type DeckCards = { [K in CardName]: Card<K> }

export class Deck {
  constructor(public readonly cards: DeckCards) {}

  static getUnassignedDeck() {
    return new Deck(unassignedDeckCards)
  }

  applyTo<K extends CardName>(
    key: K,
    fn: (card: DeckCards[K]) => DeckCards[K],
  ) {
    return new Deck({ ...this.cards, [key]: fn(this.cards[key]) })
  }
}
