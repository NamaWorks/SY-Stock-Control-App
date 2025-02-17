import { CategorieInterface } from "@/utils/interfaces/interfaces"
import Card from "../Card/Card.tsx"
import { Flex } from "@chakra-ui/react"

const Groups = ( {productsTree} : {productsTree: CategorieInterface[] | undefined}) => {

  return (
    <>
    <Flex
      wrap={'wrap'}
      gap={'0.75rem'}
      width={'100%'}
      alignItems={'center'}
      justifyContent={'center'}
      flexDirection={'row'}
    >
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </Flex>
    </>
  )
}

export default Groups