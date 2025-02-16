import Navbar from "@/components/elements/Navbar/Navbar"
import { NavigationContext } from "@/utils/contexts/contexts"
import { NavigationContextInterface } from "@/utils/interfaces/interfaces"
import { useContext, useEffect } from "react"

const Dashboard = () => {

  const { setCurrentPage } = useContext(NavigationContext) as NavigationContextInterface

  useEffect(()=>{
    setCurrentPage('dashboard')
  },)


  return (
    <>
      <Navbar/>
      
    </>
  )
}

export default Dashboard