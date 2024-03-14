import { WholeNumber } from '../utils/wholeNumber'
import { Brand } from './brand'

export type Score = number & Brand<'score'>

export const isScore = (score: number): score is Score =>
  score >= 3 && WholeNumber.is(score)
