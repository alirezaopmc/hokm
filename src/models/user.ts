import { Brand } from "./brand";

export type UserId = string & Brand<'user_id'>
export type Username = string & Brand<'username'>

export interface User {
  id: UserId,
  username: string
}