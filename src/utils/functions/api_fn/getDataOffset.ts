import { apiUrl } from "@/data/globalVariables"
import { RecordsInterface } from "@/utils/interfaces/interfaces"

export const getDataOffset = async(data:RecordsInterface, table:string)=>{
  if(data.offset){

    console.log(`${apiUrl}${import.meta.env.VITE_BASE_ID}/${table}/${data.offset}`)
  
    const resB = await fetch(`${apiUrl}${import.meta.env.VITE_BASE_ID}/${table}?offset=${data.offset}`,{
      headers:{
        "Content-type": "application/json",
        "Authorization": `Bearer ${import.meta.env.VITE_AT_TOKEN}`
      },
      method: "GET",
    })
  
    const dataB = await resB.json()

    return {records:[...data.records,...dataB.records]}
  
  }
}