import { ProductFromAtInterface, ShoppingCartItemInterface } from "@/utils/interfaces/interfaces";

export const addNewElementToCart = (originalCart:ShoppingCartItemInterface[], newElement:ProductFromAtInterface, itemsToAdd:number): ShoppingCartItemInterface[] => {
  const payload: ShoppingCartItemInterface = {
    item: newElement,
    numberOfItems:itemsToAdd
  }

  const newCartElements = [...originalCart, payload]
  console.log(newCartElements)

  return newCartElements
}