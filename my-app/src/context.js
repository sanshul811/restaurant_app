import React,{useState,useContext, useReducer} from 'react';

const initialState=["First element"];
const AppContext=React.createContext();

// const AppProvider =({children})=>{
    
   
//     return <AppContext.Provider value={{order,setOrder,addOrder}}>
//         {children}
//     </AppContext.Provider>
// }

// export const useGlobalContext=()=>{
//     return useContext(AppContext);
// }
export {AppContext}