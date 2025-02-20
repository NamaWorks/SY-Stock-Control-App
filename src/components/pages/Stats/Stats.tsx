import Navbar from "@/components/elements/Navbar/Navbar";
import { ProductsContext } from "@/utils/contexts/contexts";
import { getDataFromAt } from "@/utils/functions/api_fn/getDataFromAt";
import { getDataFromSalesAt } from "@/utils/functions/api_fn/getDataFromSalesAt";
import { getDataOffset } from "@/utils/functions/api_fn/getDataOffset";
import { getDataOffsetFromSales } from "@/utils/functions/api_fn/getDataOffsetFromSales";
// import { sumAllValues } from "@/utils/functions/math/sumAllValues";
import {
  ProductsContextInterface,
  RecordsSalesInterface,
} from "@/utils/interfaces/interfaces";
import { Button, CardRoot, Flex, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";

const Stats = () => {
  const [salesRecords, setSalesRecords] = useState<RecordsSalesInterface| undefined>(undefined);
  const [reloadStats, setReloadStats] = useState<boolean>(false);
  const [soldArticles, setSoldArticles] = useState<number>();
  const [plSales, setPlSales] = useState<number|undefined>(0)
  const [sySales, setSySales] = useState<number | undefined>(0)
  const [totalIncome, setTotalIncome] = useState<number>(0)
  const [totalItemsToSell, setTotalItemsToSell] = useState<number>()

  const { products, setProducts } = useContext(
    ProductsContext
  ) as ProductsContextInterface;



  useEffect(() => {

    const firstCall = async ()=>{
      const data = await getDataFromAt(import.meta.env.VITE_PRODUCTS_TABLE);
      if(data?.offset){
        const offset = await getDataOffset(data, import.meta.env.VITE_PRODUCTS_TABLE)
        setProducts(offset)
        console.log(products)
      }
    }
    firstCall()

    const getSalesData = async()=>{
      const data = await getDataFromSalesAt(import.meta.env.VITE_SALES_TABLE)
      setSalesRecords(data)

      if(data?.offset){
        const offsetA = await getDataOffsetFromSales(salesRecords, import.meta.env.VITE_SALES_TABLE)
        console.log(offsetA)
      }
    }
    getSalesData()

    setSoldArticles(products?.records.map((record)=>Number(record.fields?.stockOrigin)-Number(record.fields?.stock)).reduce((a,b)=>a+b))
    setTotalItemsToSell(products?.records.map((record)=>Number(record.fields?.stockOrigin)).reduce((a,b)=>a+b))
    
    if(salesRecords?.records){
      if(salesRecords?.records.length > 0){
          setPlSales(salesRecords.records.map((record)=>record.fields.pl).reduce((a,b)=>a+b))
          setSySales(salesRecords?.records.map((record)=>record.fields.sy).reduce((a,b)=>a+b))
          setTotalIncome(salesRecords?.records.map((record)=>record.fields.total).reduce((a,b)=>a+b))
          console.log(totalItemsToSell)
      }
    }

  }, [setProducts, reloadStats]);


  return (
    <>
      <Navbar />
      <Flex
        flexDirection={"column"}
        height={"100svh"}
        justifyContent={"space-between"}
        width={"100svw"}
        padding={"100px 1rem "}
      >
        <Button
          width={"100%"}
          colorPalette={'orange'}
          onClick={() => {
            setReloadStats(!reloadStats);
          }}
        >
          Recargar stats
        </Button>

        <Flex
          display={'flex'}
          flexDirection={'column'}
          gap={'1rem'}
        >

            <Flex
              width={"100%"}
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
              flexDirection={"column"}
              >
                <Text
                  color={'white'}
                  textTransform={'uppercase'}
                  fontSize={'14px'}
                >
                  Volumen de ventas:
                </Text>
          <CardRoot width={"100%"} height={"auto"} variant={"subtle"} padding={'0.5rem 0.5rem'} backgroundColor={'#E3E8F0'}>
          <Text>{salesRecords?.records.length} ventas</Text>

          </CardRoot>
            </Flex>
            <Flex
              width={"100%"}
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
              flexDirection={"column"}
              >
                <Text
                  color={'white'}
                  textTransform={'uppercase'}
                  fontSize={'14px'}
                >
                  Artículos vendidos:
                </Text>
          <CardRoot width={"100%"} height={"auto"} variant={"subtle"} padding={'0.5rem 0.5rem'}  backgroundColor={'#E3E8F0'}>
              <Text>{soldArticles || 'No tenemos'} artículos vendidos de {totalItemsToSell}</Text>
          </CardRoot>
            </Flex>


            <Flex
              width={"100%"}
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
              flexDirection={"column"}
              >
                <Text
                  color={'white'}
                  textTransform={'uppercase'}
                  fontSize={'14px'}
                >
                  Ventas Pablo (sin contar descuentos)
                </Text>
          <CardRoot width={"100%"} height={"auto"} variant={"subtle"} padding={'0.5rem 0.5rem'}  backgroundColor={'#E3E8F0'}>
              <Text>{plSales} €</Text>
          </CardRoot>


            </Flex>
            <Flex
              width={"100%"}
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
              flexDirection={"column"}
              >
                <Text
                  color={'white'}
                  textTransform={'uppercase'}
                  fontSize={'14px'}
                >
                  Ventas Ana (sin contar descuentos)
                </Text>
          <CardRoot width={"100%"} height={"auto"} variant={"subtle"} padding={'0.5rem 0.5rem'}  backgroundColor={'#E3E8F0'}>
              <Text>{sySales} €</Text>
          </CardRoot>


            </Flex>


            <Flex
              width={"100%"}
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
              flexDirection={"column"}
              >
                <Text
                  color={'white'}
                  textTransform={'uppercase'}
                  fontSize={'14px'}
                >
                  Ingresos totales (contando descuentos)
                </Text>
          <CardRoot width={"100%"} height={"auto"} variant={"subtle"} padding={'0.5rem 0.5rem'}  backgroundColor={'#E3E8F0'}>
              <Text>{totalIncome} €</Text>
          </CardRoot>


            </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Stats;


