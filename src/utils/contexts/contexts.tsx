import { createContext } from "react";
import { NavigationContextInterface, ProductsContextInterface, ShoppingCartContextInterface} from "../interfaces/interfaces";

export const NavigationContext = createContext<NavigationContextInterface | undefined>(undefined)
export const ProductsContext = createContext<ProductsContextInterface | undefined>(undefined)
export const ShoppingCartContext = createContext<ShoppingCartContextInterface | undefined>(undefined)