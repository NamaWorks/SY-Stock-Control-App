import { apiUrl } from "@/data/globalVariables"
import {  RecordsSalesInterface } from "@/utils/interfaces/interfaces"

export const getDataOffsetFromSales = async(data:RecordsSalesInterface | undefined, table:string):Promise< RecordsSalesInterface | undefined>=>{
  if(data?.offset){

    console.log(`${apiUrl}${import.meta.env.VITE_BASE_ID}/${table}/${data.offset}`)
  
    const resB = await fetch(`${apiUrl}${import.meta.env.VITE_BASE_ID}/${table}?offset=${data.offset}`,{
      headers:{
        "Content-type": "application/json",
        "Authorization": `Bearer ${import.meta.env.VITE_AT_TOKEN}`
      },
      method: "GET",
    })
  
    const dataB = await resB.json()

    return {offset:dataB.offset, records:[...data.records,...dataB.records]}
  
  }
}