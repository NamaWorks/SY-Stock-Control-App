import { createContext } from "react";
import { NavigationContextInterface } from "../interfaces/interfaces";

export const NavigationContext = createContext<NavigationContextInterface | undefined>(undefined)