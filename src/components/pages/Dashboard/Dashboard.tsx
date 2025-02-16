import Navbar from "@/components/elements/Navbar/Navbar"
import { NavigationContext, ProductsContext } from "@/utils/contexts/contexts"
import { NavigationContextInterface, ProductsContextInterface } from "@/utils/interfaces/interfaces"
import { useContext, useEffect } from "react"
import { getDataFromAt } from "@/utils/functions/api_fn/getDataFromAt"
import { Button } from "@chakra-ui/react"

const Dashboard = () => {

  const { setCurrentPage } = useContext(NavigationContext) as NavigationContextInterface
  const { products, setProducts } = useContext(ProductsContext) as ProductsContextInterface

  useEffect(()=>{
    setCurrentPage('dashboard')
    // setProducts(getDataFromAt(import.meta.env.VITE_PRODUCTS_TABLE))
  },[])
  
  
  return (
    <>
      <Navbar/>
      <Button onClick={()=>{getDataFromAt(import.meta.env.VITE_PRODUCTS_TABLE)}}>
        Update Items
      </Button>
    </>
  )
}

export default Dashboard