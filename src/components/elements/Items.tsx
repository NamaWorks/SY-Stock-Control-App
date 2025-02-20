import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { NavigationContext, ProductsContext } from "@/utils/contexts/contexts";
import { NavigationContextInterface, ProductFromAtInterface, ProductsContextInterface } from "@/utils/interfaces/interfaces";
import { getDataFromAt } from "@/utils/functions/api_fn/getDataFromAt";
import { createProductTree } from "@/utils/functions/api_fn/createProductTree";
import { Flex } from "@chakra-ui/react";
import ProductCard from "./ProductCard/ProductCard";
import ItemPopup from "./ItemPopup/ItemPopup";

const Items = () => {
  const { group, subgroup } = useParams();
  const { setProducts, products, setProductsTree } = useContext(ProductsContext) as ProductsContextInterface
  const { setFetchingData } = useContext(NavigationContext) as NavigationContextInterface
  
  const [productsToPrint, setProductsToPrint ] = useState<ProductFromAtInterface[]>()

  const [ clickedItem, setClickedItem ] = useState<ProductFromAtInterface | null>(null)

    useEffect(() => {
      const start = async () => {
        if (!products) {
          setFetchingData(true)
          const firstCall = async () => {
            setProducts(await getDataFromAt(import.meta.env.VITE_PRODUCTS_TABLE));
            setProductsTree(createProductTree(products));
          }
          await firstCall()
        }
      }
      start()

      window.addEventListener('load', ()=>{setFetchingData(false)})
  
      return ()=>{
        window.removeEventListener('load', ()=>{setFetchingData(false)})
      }
    }, [products, setProducts, setProductsTree, setFetchingData])

    useEffect(()=>{
      const productsFiltered = products?.records?.filter((product)=>{
        if(!(subgroup === 'all')){
          return (product.fields?.grupo === group && product.fields?.subgrupo === subgroup)
        } else {
          return (product.fields?.grupo === group)
        }
      })

      setProductsToPrint(productsFiltered)

    },[products, group, subgroup])

    useEffect(()=>{
    },[clickedItem])
    

  return (
    <>
      <Navbar />

      {
        clickedItem && <ItemPopup product={clickedItem} setClickedItem={setClickedItem}/>
      }

      <Flex
        wrap={'wrap'}
        gap={'0.75rem'}
        width={'100%'}
        alignItems={'center'}
        justifyContent={'center'}
        // flexDirection={'row'}
        padding={'80px 0'}
      >
        {
          productsToPrint?.map((prod) => {
            if(prod.fields && prod.fields.stock && Number(prod.fields.stock) > 0){
              return <ProductCard data={prod} fnc={() => setClickedItem(prod)} />
            }
          })
        }
      </Flex>

    </>
  );
};

export default Items;
