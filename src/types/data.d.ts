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
export type BrandItem = {
  id: string
  name: string
  nameEn: string
  logo: string
  picture: string
  type?: any
  desc: string
  place: string
}


export interface productItem {
  id: string;
  name: string;
  picture: string;
  saleInfo: string;
  children: Child[];
  goods: Good[];
}

export interface Good {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: any;
  orderNum: number;
}

export interface Child {
  id: string;
  name: string;
  layer: number;
  parent?: any;
}



export interface specialItem {
  creator: string;
  isDelete: number;
  createTime: string;
  updateTime: string;
  id: string;
  classificationId: string;
  title: string;
  summary: string;
  lowestPrice: number;
  cover: string;
  detailsUrl: string;
  collectNum: number;
  viewNum: number;
  replyNum: number;
}


interface TopBread {
  id: string;
  name: string;
  picture?: any;
  children: TopBreadChild[];
}

interface TopBreadChild {
  id: string;
  name: string;
  picture: string;
  parentId?: any;
  parentName?: any;
  goods: TopBreadGood[];
  categories?: any;
  brands?: any;
  saleProperties?: any;
}

interface TopBreadGood {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: any;
  orderNum: number;
}