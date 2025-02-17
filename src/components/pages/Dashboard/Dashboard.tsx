import Navbar from "@/components/elements/Navbar/Navbar";
import { NavigationContext, ProductsContext } from "@/utils/contexts/contexts";
import {
  CategorieInterface,
  NavigationContextInterface,
  ProductsContextInterface,
} from "@/utils/interfaces/interfaces";
import { memo, useContext, useEffect, useState } from "react";
import { getDataFromAt } from "@/utils/functions/api_fn/getDataFromAt";
import { Flex } from "@chakra-ui/react";
import { createProductTree } from "@/utils/functions/api_fn/createProductTree";
import Groups from "@/components/elements/Groups/Groups";

const Dashboard = memo(() => {
  const { setCurrentPage } = useContext(NavigationContext) as NavigationContextInterface;
  const { products, setProducts } = useContext(ProductsContext) as ProductsContextInterface;
  const [productsTree, setProductsTree] = useState<CategorieInterface[] | undefined>(undefined);

  useEffect(() => {
    setCurrentPage("dashboard");
  });

  useEffect(() => {
    const intervalForApiCalls = setInterval(async () => {
      console.log("interval started");
      setProducts(await getDataFromAt(import.meta.env.VITE_PRODUCTS_TABLE));
    }, 10000);

    return () => {
      clearInterval(intervalForApiCalls);
      console.log("interval cleared");
    };
  });

  useEffect(() => {
    setProductsTree(createProductTree(products));
  }, [products]);

  return (
    <>
      <Navbar />
      <Flex
        height={"80svh"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        width={'96svw'}
      >
        <Groups
          productsTree = {productsTree}
        />
      </Flex>
    </>
  );
});

export default Dashboard;
