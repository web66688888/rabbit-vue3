import { LoginResult } from "@/types/user"

const KEY = 'userInfo'
export function setStorage(data:LoginResult) {
  localStorage.setItem(KEY,JSON.stringify(data))
}
export function getStorage() {
  return  JSON.parse(localStorage.getItem(KEY) || '{}')
}
export function removeStorage() {
  localStorage.removeItem(KEY)
}