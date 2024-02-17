import { Brand } from './brand'
import { Card, Suit } from './card.model'

export type PlayerId = string & Brand<'player_id'>
export type PlayerIndex = 1 | 2 | 3 | 4

type InHandCard = Card & Brand<'in_hand'>
type Hokm = Suit & Brand<'hokm'>

interface IPlayer {
  id: PlayerId
  index: PlayerIndex
  cards: Card[]
  play(card: Card, playedCards: Card[]): IPlayer
}

interface IHakem<H extends Hokm | null> extends IPlayer {
  hokm: H
  setHokm(suit: Suit): IHakem<Hokm>
}

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

export class Player extends AbstractPlayer implements IPlayer {
  play(card: Card, playedCards: Card[]) {
    const newCards = this.playCard(card, playedCards)

    return new Player(this.id, this.index, newCards)
  }
}

export class Hakem<H extends Hokm | null>
  extends AbstractPlayer
  implements IHakem<H>
{
  constructor(
    id: PlayerId,
    index: PlayerIndex,
    cards: Card[],
    public readonly hokm: H,
  ) {
    super(id, index, cards)
  }

  play(card: Card, playedCards: Card[]) {
    const newCards = this.playCard(card, playedCards)

    return new Hakem(this.id, this.index, newCards, this.hokm)
  }

  setHokm(suit: Suit) {
    if (this.hokm !== null) {
      throw new Error('CANT_CHANGE_HOKM')
    }

    return new Hakem(this.id, this.index, this.cards, suit as Hokm)
  }
}
