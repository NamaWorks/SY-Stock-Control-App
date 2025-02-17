import { CategorieInterface } from "@/utils/interfaces/interfaces"
import { CardRoot, CardTitle, Image } from "@chakra-ui/react"
import { MouseEventHandler } from "react"


const Card = ({data, kind, fnc}:{data:CategorieInterface | undefined | string, kind:string, fnc?:MouseEventHandler<HTMLDivElement> | undefined}) => {
  return (
    <>
      <CardRoot
        minWidth={'170px'}
        colorPalette={'orange'}
        minHeight={'250px'}
        display={'flex'}
        flexDir={'row'}
        alignItems={'center'}
        justifyContent={'center'}
        position={'relative'}
        variant={'outline'}
        onClick={fnc}
      >

        {kind === 'product' &&
          <Image
          position={'absolute'}
          src="#"
          alt="image"
          opacity={'45%'}
        />
        }

        <CardTitle>
          {
            kind === 'group' && typeof data !== 'string' && data?.name?.toUpperCase()
          }
          
          {
            kind === 'subgroup' && data as unknown as string
          }
        </CardTitle>


      </CardRoot>
    </>
  )
}

export default Card


