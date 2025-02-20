import { apiUrl } from "@/data/globalVariables"
import { RecordsInterface} from "@/utils/interfaces/interfaces"

export const getDataFromAt = async (table:string):Promise<RecordsInterface | undefined> => {
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