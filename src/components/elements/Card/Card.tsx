import { CardRoot, CardTitle, Image } from "@chakra-ui/react"


const Card = () => {
  return (
    <>
      <CardRoot
        minWidth={'170px'}
        // width={'100%'}
        minHeight={'250px'}
        display={'flex'}
        flexDir={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        position={'relative'}
      >

        <Image
          position={'absolute'}
          src="#"
          alt="image"
          opacity={'45%'}
        />

        <CardTitle>
          TESTE
        </CardTitle>


      </CardRoot>
    </>
  )
}

export default Card


