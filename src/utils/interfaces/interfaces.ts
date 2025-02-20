import React from "react";

export interface NavigationContextInterface {
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  fetchingData: boolean;
  setFetchingData: React.Dispatch<React.SetStateAction<boolean>>
} 

export interface ProductsContextInterface {
  products: RecordsInterface | undefined;
  setProducts: React.Dispatch<React.SetStateAction<RecordsInterface | undefined>>;
  productsTree: CategorieInterface[] | undefined;
  setProductsTree: React.Dispatch<React.SetStateAction<CategorieInterface[] | undefined>>
}

export interface NotificationContextInterface {
  notificationText:string;
  setNotificationText: React.Dispatch<React.SetStateAction<string>>;
  notificationOn: boolean;
  setNotificationOn: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ShoppingCartContextInterface {
  productsInCart: ShoppingCartItemInterface[];
  setProductsInCart: React.Dispatch<React.SetStateAction<ShoppingCartItemInterface[] | undefined>>
}

export interface ShoppingCartItemInterface {
  item: ProductFromAtInterface;
  numberOfItems: number;
}

export interface ProductFromAtInterface {
  id?:string;
  createdTime?: string;
  fields?: {
    grupo?: string;
    subgrupo?: string;
    store_id?: string;
    nombre?: string;
    precio?: number | string;
    stock?: number | string;
    // imagen?: ImageFieldInterface;
    imagenUrl?: string;
    row?: number;
    person?: string
  }
}

export interface SaleDataInterface {
  records:[
    {
      fields:{
        // itemsData: SaleItemsDataInterace[];
        itemsData: string;
        total: number;
        metodoPago: string;
        descuento: string | number;
        pl: number;
        sy: number;
      }
    }
  ]
}

export interface SaleItemsDataInterace{
  id?:string;
  nameGiven?: string;
  units?: number | string;
  price?: number|string
}

export interface RecordsInterface {
  records: ProductFromAtInterface[];
  offset?: string;
}

export interface CategorieInterface {
  name: string | null;
  subcategories: Array<string | null>;
}


// export interface ImageFieldInterface {
//   filename: string;
//   height:number;
//   id: string;
//   size: number;
//   thumbnails: ImageFieldThumbnailInterface;
//   type:string;
//   url:string;
//   width: number;
// }

// export interface ImageFieldThumbnailInterface {
//   full: ImageFieldThumbnailsInterface;
//   large: ImageFieldThumbnailsInterface;
//   small: ImageFieldThumbnailsInterface;
// }

// export interface ImageFieldThumbnailsInterface {
//     url: string ; 
//     width: number; 
//     height: number;
// }

