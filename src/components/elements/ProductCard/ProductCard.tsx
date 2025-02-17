import { ProductFromAtInterface } from "@/utils/interfaces/interfaces"
import { CardBody, CardFooter, CardRoot, CardTitle, Image } from "@chakra-ui/react"
import { MouseEventHandler } from "react"


const ProductCard = ({data,  fnc}:{data: ProductFromAtInterface ,fnc?:MouseEventHandler<HTMLDivElement> | undefined}) => {
  return (
    <>
      <CardRoot
        minWidth={'170px'}
        maxWidth={'170px'}
        colorPalette={'orange'}
        minHeight={'250px'}
        maxHeight={'250px'}
        display={'flex'}
        flexDir={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        position={'relative'}
        variant={'outline'}
        onClick={fnc}
        gap={'0.25rem'}
        padding={'1rem'}
      >

        {data.fields.imagen &&
          <Image
          position={'absolute'}
          src={data.fields.imagen}
          alt={data.fields.nombre}
          opacity={'45%'}
        />
        }

        <CardTitle
          textAlign={'center'}
        >
          {data.fields.nombre}
        </CardTitle>

        <CardBody
          textAlign={'center'}
        >
          {data.fields.stock || 'no stock data'}
        </CardBody>

        <CardFooter
          textAlign={'center'}
        >
          {`${data.fields.precio} €`}
        </CardFooter>


      </CardRoot>
    </>
  )
}

export default ProductCard
