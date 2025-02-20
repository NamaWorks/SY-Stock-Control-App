import { ProductFromAtInterface } from "@/utils/interfaces/interfaces";
import {
  CardBody,
  CardFooter,
  CardRoot,
  CardTitle,
  Flex,
  Image,
} from "@chakra-ui/react";
import { MouseEventHandler } from "react";

const ProductCard = ({
  data,
  fnc,
}: {
  data: ProductFromAtInterface;
  fnc?: MouseEventHandler<HTMLDivElement> | undefined;
}) => {

  return (
    <>
      <CardRoot
        minWidth={"170px"}
        maxWidth={"170px"}
        colorPalette={"orange"}
        minHeight={"300px"}
        maxHeight={"300px"}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        position={"relative"}
        variant={"subtle"}
        onClick={fnc}
        gap={"0.5rem"}
        // padding={"1rem"}
      >
        <Flex
          // height={'40%'}
          overflow={'hidden'}
          display={'flex'}
        >
          <Image
            // position={"absolute"}
            // src={data.fields.imagen?.thumbnails.small.url}
            src={data.fields?.imagenUrl || 'https://media.giphy.com/media/Zg7clvqHE3CdW/giphy.gif?cid=790b7611pqwrqvp8vyi8ah0jvhi5vhgz32hntk4hwej1n1cw&ep=v1_gifs_search&rid=giphy.gif&ct=g'}
            // height={"100%"}
            // width={"100%"}
            // alignSelf={"center"}
            // justifySelf={"center"}
            alt={data.fields?.nombre}
            objectFit={'contain'}
            objectPosition={'center'}
            borderRadius={'5px'}
            // opacity={"45%"}
          />
        </Flex>

        <Flex
          display={'flex'}
          flexDirection={'column'}
          // height={'60%'}
          gap={0}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <CardTitle textAlign={"center"} padding={'2px'} textTransform={'uppercase'} lineHeight={'0.95'} fontSize={'16px'}>{data.fields?.nombre}</CardTitle>

          <CardBody textAlign={"center"} padding={'2px'}>
            {`${data.fields?.stock} unidades`}
          </CardBody>

          <CardFooter textAlign={"center"} padding={'2px'}>
            {`${data.fields?.precio} €`}
          </CardFooter>
        </Flex>
      </CardRoot>
    </>
  );
};

export default ProductCard;
