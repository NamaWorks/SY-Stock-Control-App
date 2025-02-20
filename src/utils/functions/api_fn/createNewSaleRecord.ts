import { apiUrl } from "@/data/globalVariables"
import { SaleDataInterface, ShoppingCartItemInterface } from "@/utils/interfaces/interfaces"

export const createNewSaleRecord = async(table:string, payload:SaleDataInterface) => {
  try {
    const res = await fetch(`${apiUrl}${import.meta.env.VITE_BASE_ID}/${table}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${import.meta.env.VITE_AT_TOKEN}`
      },
      body: JSON.stringify(payload),
      method: "POST",
    })

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
}

export const prepareSaleDataFromCart = (cartItems:ShoppingCartItemInterface[], discount:number=0, paymentMethod:string='efectivo', totalSale:number=0):SaleDataInterface=>{
  return {
    // records:[
      // {
        fields:{
          // itemsData: cartItems.map((item)=>{return {id:item?.item?.id, nameGiven:item?.item?.fields?.nombre, units:item?.numberOfItems, price:item?.item?.fields?.precio}}),
          itemsData: ` ${cartItems.filter((item)=>item.numberOfItems>0).map((item)=>{return `name:${item.item.fields?.nombre}; numberOfItems:${item.numberOfItems}; id:${item.item.id}; price:${item.item.fields?.precio} |`})}`,
          total: totalSale-discount,
          metodoPago: paymentMethod,
          descuento: discount,
          pl: checkSalesUser(cartItems).plSales,
          sy: checkSalesUser(cartItems).sySales
        }
      // }
    // ]
  }
}

export const checkSalesUser = (cartItems:ShoppingCartItemInterface[]):{sySales:number, plSales:number} =>{
  let saleSylvatica:number = 0
  let salePlumarium:number = 0

  cartItems.forEach((cartItem)=>{
    if(cartItem.item.fields?.person == 'sy' ){
      saleSylvatica += (cartItem.numberOfItems*Number(cartItem.item.fields?.precio))
    } else if(cartItem.item.fields?.person == 'pl'){
      salePlumarium += (cartItem.numberOfItems*Number(cartItem.item.fields?.precio))
    }
  })


  return {
    sySales:saleSylvatica,
    plSales:salePlumarium
  }
}