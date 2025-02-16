import { createContext } from "react";
import { NavigationContextInterface, ProductsContextInterface } from "../interfaces/interfaces";

export const NavigationContext = createContext<NavigationContextInterface | undefined>(undefined)
export const ProductsContext = createContext<ProductsContextInterface | undefined>(undefined)