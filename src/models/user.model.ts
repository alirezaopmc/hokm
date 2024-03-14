import { Brand } from './brand'

export type UserId = string & Brand<'user_id'>
export type Username = string & Brand<'username'>

export interface User {
  id: UserId
  Username: Username
}

export const isUsername = (username: string): username is Username => {
  return 4 <= username.length && username.length < 32
}
