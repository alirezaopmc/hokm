import { Brand } from './brand'
import { Card, Suit } from './card.model'

export type PlayerId = string & Brand<'player_id'>
export type PlayerIndex = 1 | 2 | 3 | 4
export type Hokm = Suit & Brand<'hokm'>

export interface Player {
  id: PlayerId
  index: PlayerIndex
  cards: Card[]
  play(card: Card, playedCards: Card[]): Player
}

export interface Hakem extends Player {
  setHokm(suit: Suit): Hokm
}

type InHandCard = Card & Brand<'in_hand'>
abstract class AbstractPlayer {
  constructor(
    public readonly id: PlayerId,
    public readonly index: PlayerIndex,
    public readonly cards: Card[],
  ) {}

  protected playCard(card: Card, playedCards: Card[]) {
    if (!this.isInHandCard(card)) {
      throw new Error('CARD_NOT_AVAILABLE')
    }

    if (playedCards.length === 0) {
      return this.filter(card)
    }

    const playingSuit = playedCards[0].suit

    if (this.hasSuit(playingSuit) && card.suit !== playingSuit) {
      throw new Error('INVALID_CARD')
    }

    return this.filter(card)
  }

  protected isInHandCard(card: Card): card is InHandCard {
    return this.cards.some((handCard) => handCard.isEqual(card))
  }

  protected hasSuit(suit: Suit) {
    return this.cards.some((handCard) => handCard.suit === suit)
  }

  protected filter(card: InHandCard) {
    return this.cards.filter((handCards) => !handCards.isEqual(card))
  }
}

export class PlayerImp extends AbstractPlayer implements Player {
  play(card: Card, playedCards: Card[]) {
    const newCards = this.playCard(card, playedCards)

    return new PlayerImp(this.id, this.index, newCards)
  }
}

export class HakemImp extends AbstractPlayer implements Hakem {
  play(card: Card, playedCards: Card[]) {
    const newCards = this.playCard(card, playedCards)

    return new HakemImp(this.id, this.index, newCards)
  }

  setHokm(suit: Suit) {
    return suit as Hokm
  }
}
