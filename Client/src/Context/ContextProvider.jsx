import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { getLatests } from "../services/ServicesLatest";
import { getCarts } from "../services/ServicesCars";
import { useRef } from "react";


const CarsContext = createContext(null);

export function UseCars() {
  const ContextValue = useContext(CarsContext);
  if (!ContextValue) throw new Error("erreur inside component");
  return ContextValue;
}

export default function ContextProvider({ children }) {
   const bottomRef2=useRef(null);
   const [News_Review_Data,set_News_Review_Data]=useState([]);
   const [cars, setCars] = useState([]);


       useEffect(() => {
         const fetchLatests = async () => {
           try {
             const res = await getLatests();
             const resCars = await getCarts();
             setCars(resCars.data.data.cars);
             set_News_Review_Data(res.data.data.latests);
           } catch (err) {
             console.error(err);
           }
         };

         fetchLatests();
       }, []);

  const contextValue = {
    News_Review_Data,
    cars,
    bottomRef2,
  };

  return (
    <CarsContext.Provider value={contextValue}>
      {children}
    </CarsContext.Provider>
  );
}
