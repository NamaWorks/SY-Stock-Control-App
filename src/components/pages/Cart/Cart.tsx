import CartItem from "@/components/elements/CartItem/CartItem";
import Navbar from "@/components/elements/Navbar/Navbar";
import { ShoppingCartContext } from "@/utils/contexts/contexts";
import { patchItemById } from "@/utils/functions/api_fn/patchItembyId";
import { ShoppingCartContextInterface } from "@/utils/interfaces/interfaces";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";

const Cart = () => {
  const { productsInCart, setProductsInCart } = useContext(
    ShoppingCartContext
  ) as ShoppingCartContextInterface;
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);

  useEffect(() => {
    console.log(productsInCart);
    let acc: number = 0;

    productsInCart.forEach((product) => {
      acc += product.numberOfItems * Number(product.item.fields?.precio);
      setTotalPrice(acc);
    });
  }, [productsInCart]);

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
        gap={"1rem"}
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
            setProductsInCart([]);
          }}
        >
          LIMPIAR CARRITO
        </Button>

        <Flex flexDirection={"column"} gap={"0.5rem"} width={"100%"}>
          {productsInCart.map((product, i) => {
            if (product.numberOfItems > 0) {
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
          width={"100%"}
          marginTop={"3rem"}
          flexDirection={"column"}
          gap={"2rem"}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
            }}
          >
            <input
              type="number"
              name="discount"
              id="discount"
              style={{
                borderRadius: "5px",
                height: "30px",
                width: "65%",
                padding: "1rem",
                fontSize: "24px",
              }}
              onChange={(e) => {
                setDiscount(Number(e.target.value));
              }}
              min={0}
            />
            <label
              htmlFor="discount"
              style={{ color: "white", fontSize: "24px" }}
            >
              DESCUENTO EN €
            </label>
          </div>

          <Text
            fontWeight={"400"}
            textTransform={"uppercase"}
            lineHeight={"1.2"}
            color={"white"}
            fontSize={"24px"}
            width={"100%"}
            textAlign={"end"}
          >
            {`TOTAL: ${(discount > totalPrice
              ? 0
              : totalPrice - Number(discount)
            ).toFixed(2)}€`}
          </Text>
          <Flex flexDirection={"row"} justifyContent={"space-between"}>
            {/* <Button>CANCELAR</Button> */}
            <Button
              colorPalette={"orange"}
              width={'100%'}
              onClick={() => {
                productsInCart.forEach((prod) => {
                  let savedId: string | undefined;
                  if (prod.item) {
                    if (prod.item.fields) {
                      if (prod.item.fields.stock) {
                        savedId = prod.item.id;

                        const newStock =
                          Number(prod.item.fields.stock) - prod.numberOfItems;

                        prod.item = {
                          fields: {
                            stock: `${Number(newStock)}`,
                          },
                        };

                        console.log(JSON.stringify(prod.item));
                        console.log(savedId);
                        patchItemById(
                          import.meta.env.VITE_PRODUCTS_TABLE,
                          savedId,
                          prod.item
                        );
                      }
                    }
                  }
                });
                setProductsInCart([]);
                setTotalPrice(0)
              }}
            >
              FINALIZAR
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Cart;
