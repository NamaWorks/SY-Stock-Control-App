import Navbar from "@/components/elements/Navbar/Navbar";
import { 
  // NavigationContext, 
  ProductsContext } from "@/utils/contexts/contexts";
import {
  // NavigationContextInterface,
  ProductsContextInterface,
} from "@/utils/interfaces/interfaces";
import { memo, useContext, useEffect} from "react";
import { getDataFromAt } from "@/utils/functions/api_fn/getDataFromAt";
import { Flex } from "@chakra-ui/react";
import { createProductTree } from "@/utils/functions/api_fn/createProductTree";
import Groups from "@/components/elements/Groups/Groups";
import { getDataOffset } from "@/utils/functions/api_fn/getDataOffset";

const Dashboard = memo(() => {
  // const { setCurrentPage, setFetchingData } = useContext(NavigationContext) as NavigationContextInterface;
  // const { setFetchingData } = useContext(NavigationContext) as NavigationContextInterface;
  const { products, setProducts, productsTree, setProductsTree } = useContext(ProductsContext) as ProductsContextInterface;



  // useEffect(() => {
  //   setCurrentPage("dashboard");
  // });

  useEffect(() => {

    if(!products){
      // setFetchingData(true)
      const firstCall = async ()=>{
        const data = await getDataFromAt(import.meta.env.VITE_PRODUCTS_TABLE);
        if(data.offset){
          const offset = await getDataOffset(data, import.meta.env.VITE_PRODUCTS_TABLE)
          setProducts(offset)
        }
      }
      firstCall()
    }

    // const intervalForApiCalls = setInterval(async () => {
    //   console.log("interval started");
    //   setProducts(await getDataFromAt(import.meta.env.VITE_PRODUCTS_TABLE));
    // }, 10000);

  });

  useEffect(() => {
    setProductsTree(createProductTree(products));
  }, [products, setProductsTree]);

  return (
    <>
      <Navbar />

      <Flex
        height={"100svh"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        width={'96svw'}
        padding={'80px 0'}
        overflow={'scroll'}
      >
        <Groups
          productsTree = {productsTree}
        />
      </Flex>
    </>
  );
});

export default Dashboard;
