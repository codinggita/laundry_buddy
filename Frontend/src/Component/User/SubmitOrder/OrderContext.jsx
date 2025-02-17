import { createContext,useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({children}) => {
    const[weight,setWeight]=useState("");
    const[numberofitems,setNumberOfItems]=useState("");
    const[bagNumber,setBagNumber]=useState("");

    return (
        <OrderContext.Provider value={{weight,setWeight,numberofitems,setNumberOfItems,bagNumber,setBagNumber}}>
            {children}
        </OrderContext.Provider>
    )

}