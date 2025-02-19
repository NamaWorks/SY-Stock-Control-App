import { ShoppingCartContext } from "@/utils/contexts/contexts"
// import { addNewElementToCart } from "@/utils/functions/cart_fn/addNewElementToCart"
import { ProductFromAtInterface, ShoppingCartContextInterface } from "@/utils/interfaces/interfaces"
import { Button, Flex, Icon, Text } from "@chakra-ui/react"
import { useContext, useState } from "react"

const ItemPopup = ({product, setClickedItem}:{product: ProductFromAtInterface, setClickedItem: React.Dispatch<React.SetStateAction<ProductFromAtInterface | null>>}) => {

  const { productsInCart, setProductsInCart } = useContext(ShoppingCartContext) as ShoppingCartContextInterface
  const [ numberOfItemsToAdd, setNumberOfItemsToAdd ] = useState<number>(1)


  return (
    <>
    <Flex
      position={'fixed'}
      top={0}
      zIndex={98}
      backgroundColor={'#000000A6'}
      width={'100%'}
      left={'0'}
      height={'100%'}
    >
      <Flex
        position={"relative"}
        flexDirection={'column'}
        height={'300px'}
        width={'94%'}
        left={'3%'}
        top={'calc(50% - 150px)'}
        backgroundColor={'#E3E8F0'}
        borderRadius={'0.5rem'}
        justifyContent={'space-between'}
      >

        <Flex
          padding={'2rem 1rem'}
          flexDirection={'column'}
        >
          <Text
            fontWeight={'400'}
            textTransform={'uppercase'}
          >
            {product?.fields.nombre}
          </Text>
          <Text>
            {`Stock: ${product?.fields?.stock} Unidades`}
          </Text>
        </Flex>

        <Flex
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          width={'95%'}
        >
          <Button
            variant={'ghost'}
            onClick={()=>{setClickedItem(null)}}
          >
            CANCELAR
          </Button>

          <Flex
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            gap={'1rem'}
          >
            <Button
              borderRadius={'full'}
              variant={'subtle'}
              fontSize={"24px"}
              width={'25px'}
              onClick={()=>{setNumberOfItemsToAdd(numberOfItemsToAdd <= 1 ? numberOfItemsToAdd : numberOfItemsToAdd-1)}}
              >
              <Icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-minus"><path d="M5 12h14"/></svg>
              </Icon>
            </Button>
            <Text
              display={'flex'}
              alignContent={'center'}
              justifyContent={'center'}
              fontSize={'32px'}
              alignItems={'center'}
              width={'40px'}
            >
              {numberOfItemsToAdd}
            </Text>
            <Button
              borderRadius={'full'}
              variant={'subtle'}
              fontSize={"24px"}
              width={'25px'}
              onClick={()=>{setNumberOfItemsToAdd(numberOfItemsToAdd == product.fields.stock ? numberOfItemsToAdd : numberOfItemsToAdd + 1)}}
            >
              <Icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
              </Icon>
            </Button>
          </Flex>
        </Flex>

        <Flex
          flexDirection={'row'}
          justifyContent={'space-between'}
          padding={'2rem 1rem'}
        >
          <Button>
          DEVOLUCIÓN
          </Button>

          <Button
            colorPalette={'orange'}
            onClick={async()=>{
              // const newArr = addNewElementToCart(productsInCart, product, numberOfItemsToAdd);
              setProductsInCart([...productsInCart, {item:product, numberOfItems:numberOfItemsToAdd}]);
              console.log(productsInCart)
              setClickedItem(null)
              // localStorage.setItem('currentCart', await JSON.stringify(newArr) )
            }}
          >
          AÑADIR
          </Button>
        </Flex>

      </Flex>

    </Flex>
    </>
  )
}

export default ItemPopup