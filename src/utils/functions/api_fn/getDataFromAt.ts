import { apiUrl } from "@/data/globalVariables"

export const getDataFromAt = async (table:string) => {
  const res = await fetch(`${apiUrl}${import.meta.env.VITE_BASE_ID}/${table}`,{
    headers:{
      "Content-type": "application/json",
      "Authorization": `Bearer ${import.meta.env.VITE_AT_TOKEN}`
    },
    method: "GET",
  })
  .then(res => res.json())
  .then(data => console.log(data))
  console.log(res)
}