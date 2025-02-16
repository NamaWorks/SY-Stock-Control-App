import Navbar from "@/components/elements/Navbar/Navbar"
import { NavigationContext } from "@/utils/contexts/contexts"
import { NavigationContextInterface } from "@/utils/interfaces/interfaces"
import { useContext, useEffect } from "react"
import { getDataFromAt } from "@/utils/functions/api_fn/getDataFromAt"

const Dashboard = () => {

  const { setCurrentPage } = useContext(NavigationContext) as NavigationContextInterface

  useEffect(()=>{
    setCurrentPage('dashboard')
    getDataFromAt(import.meta.env.VITE_PRODUCTS_TABLE)
  },)


  return (
    <>
      <Navbar/>
      {}
    </>
  )
}

export default Dashboard