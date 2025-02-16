import React from "react";

export interface NavigationContextInterface {
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  previousPage: string;
  setPreviousPage: React.Dispatch<React.SetStateAction<string>>;
} 

export interface ProductsContextInterface {
  products: undefined[];
}