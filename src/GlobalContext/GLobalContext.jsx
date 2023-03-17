
import React, { useState } from 'react'
import { createContext } from 'react'
import {data} from "../data/data"

export const AppContext = createContext()

function GLobalContext({children}) {
const [info, setInfo] = useState(data)
console.log(info)

  const handleDelete = (id) =>{
      const deleteItem = info.filter((item)=>item.id !== id);
      return setInfo(deleteItem)
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