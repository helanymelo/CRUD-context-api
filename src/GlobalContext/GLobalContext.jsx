
import React, { useState } from 'react'
import { createContext } from 'react'
import {data} from "../data/data"

export const AppContext = createContext()

function GLobalContext({children}) {
const [info, setInfo] = useState(data)


  const handleDelete = (id) =>{
      if(window.confirm('Deseja excluir?')){
        const deleteItem = info.filter((item)=>item.id !== id);
        return setInfo(deleteItem)
      }
      
  }

  const refreshData = () =>{
      setInfo(data)
  }


  return (
    <AppContext.Provider value={{info, setInfo, handleDelete, refreshData}}>
        {children}
    </AppContext.Provider>
  )
}

export default GLobalContext