import { Brand } from './brand'
import { Card } from './card.model'
import { FixedSizeArray } from './state.model'

export type Deck = FixedSizeArray<Card, 52> & Brand<'deck'>
