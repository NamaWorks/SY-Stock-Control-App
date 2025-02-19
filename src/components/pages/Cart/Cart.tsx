import CartItem from "@/components/elements/CartItem/CartItem";
import Navbar from "@/components/elements/Navbar/Navbar";
import { ShoppingCartContext } from "@/utils/contexts/contexts";
import {
  ShoppingCartContextInterface,
} from "@/utils/interfaces/interfaces";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";

const Cart = () => {
  const { productsInCart, setProductsInCart } = useContext(ShoppingCartContext) as ShoppingCartContextInterface;
  const [ totalPrice, setTotalPrice ] = useState<number>(0)

  useEffect(()=>{
    let acc:number = 0

    productsInCart.forEach((product)=>{
      acc += product.numberOfItems * Number(product.item.fields.precio)
      setTotalPrice(acc)
    })

  },[productsInCart])
  
  return (
    <>
      <Navbar />
      <Flex
        height={"100svh"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        width={"96svw"}
        padding={"100px 0.5rem"}
        overflow={"scroll"}
        gap={'1rem'}
        >
        {/* <Button
          colorPalette={"orange"}
          width={"100%"}
          onClick={() => {}}
        >
          {loadingCartInfo ? 'CARGANDO INFORMACIÓN' : 'CARGAR CARRITO'}
        </Button> */}
        <Button
          colorPalette={"grey"}
          width={"100%"}
          onClick={() => {
            // const getProductsInCart = async () => {
            //   localStorage.removeItem("currentCart");
            //   setProductsInCart([]);
            // };
            // getProductsInCart();
            setProductsInCart([])
          }}
        >
          LIMPIAR CARRITO
        </Button>

        <Flex
          flexDirection={'column'}
          gap={'0.5rem'}
          width={'100%'}
        >
          {productsInCart.map((product, i) => {
            if(product.numberOfItems>0){
              return (
                <CartItem
                  item={product.item}
                  numberOfItems={product.numberOfItems}
                  index={i}
                />
              );
            }
          })}
        </Flex>

        <Flex
          width={'100%'}
          marginTop={'3rem'}
        >
          <Text fontWeight={"400"} textTransform={"uppercase"} lineHeight={'1.2'} color={'white'} fontSize={'24px'} width={'100%'} textAlign={'end'}>
            {`TOTAL: ${totalPrice.toFixed(2)}€`}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Cart;
