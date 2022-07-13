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


export interface TopBread {
  id: string;
  name: string;
  picture?: any;
  children: TopBreadChild[];
}

export interface TopBreadChild {
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

export interface TopBreadGood {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: any;
  orderNum: number;
}



interface SubResult {
  id: string;
  name: string;
  picture?: any;
  parentId: string;
  parentName: string;
  goods: SubGood[];
  categories: SubCategory[];
  brands: SubBrand[];
  saleProperties: SubSaleProperty[];
}

interface SubSaleProperty {
  id: string;
  name: string;
  properties: SubProperty[];
}

interface SubProperty {
  id: string;
  name: string;
}

interface SubBrand {
  id: string;
  name: string;
  nameEn: string;
  logo: string;
  picture: string;
  type?: any;
  desc: string;
  place: string;
}

interface SubCategory {
  id: string;
  name: string;
  layer: number;
  parent?: any;
}

interface SubGood {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: any;
  orderNum: number;
}




export interface GoodResult {
  id: string;
  name: string;
  spuCode: string;
  desc: string;
  price: string;
  oldPrice: string;
  discount: number;
  inventory: number;
  brand: Brand;
  salesCount: number;
  commentCount: number;
  collectCount: number;
  mainVideos: any[];
  videoScale: number;
  mainPictures: string[];
  specs: Spec[];
  skus: Skus[];
  categories: Category[];
  details: Details;
  isPreSale: boolean;
  isCollect?: any;
  recommends?: any;
  userAddresses?: any;
  similarProducts: SimilarProduct[];
  hotByDay: SimilarProduct[];
  evaluationInfo?: any;
}

export interface SimilarProduct {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: any;
  orderNum: number;
}

export interface Details {
  pictures: string[];
  properties: Property[];
}

export interface Property {
  name: string;
  value: string;
}

export interface Category {
  id: string;
  name: string;
  layer: number;
  parent?: Parent;
}

export interface Parent {
  id: string;
  name: string;
  layer: number;
  parent?: any;
}

export interface Skus {
  id: string;
  skuCode: string;
  price: string;
  oldPrice: string;
  inventory: number;
  specs: Spec2[];
}

export interface Spec2 {
  name: string;
  valueName: string;
}

export interface Spec {
  name: string;
  id: string;
  values: Value[];
}

export interface Value {
  name: string;
  picture?: string;
  desc: string;
  selected:boolean
}

export interface Brand {
  id: string;
  name: string;
  nameEn: string;
  logo: string;
  picture: string;
  type?: any;
  desc?: any;
  place?: any;
}