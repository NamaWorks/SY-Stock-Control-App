import React from "react";

export interface NavigationContextInterface {
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  // previousPage: string;
  // setPreviousPage: React.Dispatch<React.SetStateAction<string>>;
  fetchingData: boolean;
  setFetchingData: React.Dispatch<React.SetStateAction<boolean>>
} 

export interface ProductsContextInterface {
  products: RecordsInterface | undefined;
  setProducts: React.Dispatch<React.SetStateAction<RecordsInterface | undefined>>;
  productsTree: CategorieInterface[] | undefined;
  setProductsTree: React.Dispatch<React.SetStateAction<CategorieInterface[] | undefined>>
}

export interface ProductFromAtInterface {
  id:string;
  createdTime: string;
  fields: {
    grupo?: string;
    subgrupo?: string;
    store_id: string;
    nombre?: string;
    precio?: number | string;
    stock?: number | string;
    imagen?: undefined | string;
  }
}

export interface RecordsInterface {
  records: ProductFromAtInterface[];
}

export interface CategorieInterface {
  name: string | null;
  subcategories: Array<string | null>;
}