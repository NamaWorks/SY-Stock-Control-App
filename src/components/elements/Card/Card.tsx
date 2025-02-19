import { CategorieInterface } from "@/utils/interfaces/interfaces"
import { CardRoot, CardTitle, Image } from "@chakra-ui/react"
import { MouseEventHandler } from "react"
import { Link } from "react-router-dom"


const Card = ({data, kind, fnc, to}:{data:CategorieInterface | undefined | string, kind:string, fnc?:MouseEventHandler<HTMLDivElement> | undefined, to:string}) => {
  return (
    <>
    <Link
      to={to}
    >
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
        textTransform={'uppercase'}
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
          </Link>
    </>
  )
}

export default Card


