import { apiUrl } from "@/data/globalVariables";
import { ProductFromAtInterface, RecordsInterface } from "@/utils/interfaces/interfaces";

export const patchItemById = async (table: string, recordId: string | undefined, payload: ProductFromAtInterface): Promise<RecordsInterface | undefined> => {

  try {
    const res = await fetch(`${apiUrl}${import.meta.env.VITE_BASE_ID}/${table}/${recordId}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${import.meta.env.VITE_AT_TOKEN}`
      },
      body: JSON.stringify(payload),
      method: "PATCH",
    });

    if (!res.ok) {
      window.alert(`Error en la solicitud: ${res.status}`)
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    console.log(data)
    return data;
  } catch (err) {
    console.error(err);
    window.alert(`Error en la solicitud: ${err}`)
    return undefined;
  }
};