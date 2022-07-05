export interface CategoryItem {
  children:{
    children:CategoryItem[]
    goods:null
    id:string
    name:string
    picture:string
  }[]
  goods:{
    desc:string
    id:string
    name:string
    picture:string
    price:string
    discount:null
    orderNum:null
  }[]
  id:string
  name:string
  picture:string
}
export interface ApiRes<T> {
    code:string
    msg:string
    result: T []
}