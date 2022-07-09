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
    discount?: any;
    orderNum?: any;
  }[]
  id:string
  name:string
  picture:string
  open:boolean
}
export interface ApiRes<T> {
    code:string
    msg:string
    result: T []
}



export interface BannerItem {
  id: string;
  imgUrl: string;
  hrefUrl: string;
  type: string;
}

export interface NewItem {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: any;
  orderNum: number;
}

export interface HotItem {
  id: string;
  picture: string;
  title: string;
  alt: string;
}