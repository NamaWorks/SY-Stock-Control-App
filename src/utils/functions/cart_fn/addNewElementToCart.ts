import { ProductFromAtInterface, ShoppingCartItemInterface } from "@/utils/interfaces/interfaces";

export const addNewElementToCart = (originalCart:ShoppingCartItemInterface[], newElement:ProductFromAtInterface, itemsToAdd:number): ShoppingCartItemInterface[] => {
  console.log(originalCart)
  console.log(newElement)
  console.log(itemsToAdd)

  const payload: ShoppingCartItemInterface = {
    item: newElement,
    numberOfItems:itemsToAdd
  }

  const newCartElements = [...originalCart, payload]
  console.log(newCartElements)

  return newCartElements
}