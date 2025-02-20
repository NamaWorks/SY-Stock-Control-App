import { apiUrl } from "@/data/globalVariables"
import { RecordsSalesInterface } from "@/utils/interfaces/interfaces"

export const getDataFromSalesAt = async (table:string):Promise<RecordsSalesInterface | undefined> => {

  try {

    const res = await fetch(`${apiUrl}${import.meta.env.VITE_BASE_ID}/${table}`,{
      headers:{
        "Content-type": "application/json",
        "Authorization": `Bearer ${import.meta.env.VITE_AT_TOKEN}`
      },
      method: "GET",
    })
  
    const data = await res.json()
  
    return data
    
  } catch (err) {
    console.log(err)
  }
}