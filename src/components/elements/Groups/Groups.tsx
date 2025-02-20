import { CategorieInterface } from "@/utils/interfaces/interfaces"
import Card from "../Card/Card.tsx"
import { Flex } from "@chakra-ui/react"
// import { redirectToPage } from "@/utils/functions/navigation_fn/redirectToPage.ts"
import { useContext, useEffect } from "react"
import { NavigationContext } from "@/utils/contexts/contexts.tsx"
import { NavigationContextInterface } from "@/utils/interfaces/interfaces"
import { redirectToPage } from "@/utils/functions/navigation_fn/redirectToPage.ts"

const Groups = ( {productsTree} : {productsTree: CategorieInterface[] | undefined}) => {

  const { setFetchingData } = useContext(NavigationContext) as NavigationContextInterface;


  useEffect(()=>{
    setFetchingData(true)
    if(sessionStorage.getItem('login') !== 'true'){
          redirectToPage('login')
        }
  },[setFetchingData])

  return (
    <>
    
    <Flex
      wrap={'wrap'}
      gap={'0.75rem'}
      width={'100%'}
      alignItems={'center'}
      justifyContent={'center'}
      // flexDirection={'row'}
    >

      {
        productsTree?.map((group)=>{
          return <Card 
            data={group} kind='group'
            // fnc={()=>{redirectToPage(`dashboard/${group.name}`); setFetchingData(false)}}
            fnc={()=>{console.log('clicked')}}
            to={`/dashboard/${group.name}`}
          />
        })
      }

    </Flex>
    </>
  )
}

export default Groups