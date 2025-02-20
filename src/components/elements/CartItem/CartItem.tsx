import { ShoppingCartContext } from '@/utils/contexts/contexts'
import { ProductFromAtInterface, ShoppingCartContextInterface} from '@/utils/interfaces/interfaces'
import { Button, Flex, Icon, Text } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
const CartItem = ({item, numberOfItems, index}: {item:ProductFromAtInterface, numberOfItems:number, index:number}) => {

const { productsInCart, setProductsInCart } = useContext(ShoppingCartContext) as ShoppingCartContextInterface;

  const [ nOfItems, setNOfItems ] = useState<number>(numberOfItems)


  useEffect(()=>{
    const modArr = [...productsInCart]
    modArr[index].numberOfItems = nOfItems 
    // setProductsInCart(modArr.filter((item)=>item.numberOfItems!==0))
    setProductsInCart(modArr)
  },[nOfItems, index, setProductsInCart])

  return (
    <>
    {
      nOfItems> 0 &&
      (
        <>
      <Flex
        position={"relative"}
        flexDirection={"column"}
        minHeight={"200px"}
        width={"100%"}
        backgroundColor={"#E3E8F0"}
        borderRadius={"0.5rem"}
        justifyContent={"space-between"}
        padding={"1.25rem 1rem"}
      >

        <Flex flexDirection={"column"} gap={'0.25rem'}>

          <Text fontWeight={"400"} textTransform={"uppercase"} lineHeight={'1.2'}>
            {item?.fields?.nombre}
          </Text>

          <Text>{`Stock: ${item?.fields?.stock} Unidades`}</Text>
          <Text>{`Precio: ${item?.fields?.precio} €/unidad`}</Text>
        </Flex>

        <Flex
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Button
            textTransform={'uppercase'}
            variant={'ghost'}
            padding={0}
            onClick={()=>{
              setNOfItems(0);
            }}
          >
            quitar
          </Button>
          <Flex
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"1rem"}
            alignSelf={"end"}
          >
            <Button
              borderRadius={"full"}
              variant={"subtle"}
              fontSize={"24px"}
              width={"25px"}
              onClick={() => {
                setNOfItems(nOfItems <= 1 ? 0 : nOfItems - 1);                
              }}
            >
              <Icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-minus"
                >
                  <path d="M5 12h14" />
                </svg>
              </Icon>
            </Button>
            <Text
              display={"flex"}
              alignContent={"center"}
              justifyContent={"center"}
              fontSize={"32px"}
              alignItems={"center"}
              width={"40px"}
            >
              {nOfItems}
            </Text>
            <Button
              borderRadius={"full"}
              variant={"subtle"}
              fontSize={"24px"}
              width={"25px"}
              onClick={() => {
                setNOfItems(nOfItems == item.fields?.stock ? nOfItems : nOfItems + 1);
              }}
            >
              <Icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-plus"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </Icon>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
      )

    }
    </>
  );
}

export default CartItem