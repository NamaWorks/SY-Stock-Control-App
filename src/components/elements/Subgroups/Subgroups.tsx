import { useParams } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import { useContext, useEffect, useState } from "react"
import { NavigationContext, ProductsContext } from "@/utils/contexts/contexts"
import { NavigationContextInterface, ProductsContextInterface } from "@/utils/interfaces/interfaces"
import { getDataFromAt } from "@/utils/functions/api_fn/getDataFromAt"
import Card from "../Card/Card"
import { createProductTree } from "@/utils/functions/api_fn/createProductTree"
import { Flex } from "@chakra-ui/react"
// import { redirectToPage } from "@/utils/functions/navigation_fn/redirectToPage"

const Subgroups = () => {
  const { group } = useParams<{ group: string }>()
  const { products, setProducts, setProductsTree } = useContext(ProductsContext) as ProductsContextInterface;
  const { setFetchingData } = useContext(NavigationContext) as NavigationContextInterface;

  const [subgroupsToPrint, setSubgroupsToPrint] = useState<(string | undefined)[] | undefined>(undefined)

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

  useEffect(() => {
    setFetchingData(true)
    let subgroups: (string | undefined)[] | undefined = []

    const filteredByGroup = products?.records?.filter((item) => {
      return item.fields?.grupo === group
    })

    filteredByGroup?.forEach((item) => {
      if (!subgroups?.includes(item.fields?.subgrupo)) {
        subgroups?.push(item.fields?.subgrupo)
      }
    })

    if(subgroups[0] === undefined){
      subgroups=undefined
    }

    setSubgroupsToPrint(subgroups)
    setFetchingData(false)
  }, [products, group, setFetchingData])

  return (
    <>
      <Navbar />

      <Flex
        wrap={'wrap'}
        gap={'0.75rem'}
        width={'100%'}
        alignItems={'center'}
        justifyContent={'center'}
        // flexDirection={'row'}
      >
      {subgroupsToPrint &&
        subgroupsToPrint?.map((subgroup) => {
          return <Card key={subgroup} data={subgroup} kind="subgroup" to={`/dashboard/${group}/${subgroup}`} fnc={()=>{setFetchingData(true)}}/>
        })
      }

      {
        subgroupsToPrint === undefined &&
        <Card key={'all'} data={'todos'} kind="subgroup" to={`/dashboard/${group}/all`} fnc={()=>{setFetchingData(true)}}/>
      }
      </Flex>
    </>
  )
}

export default Subgroups