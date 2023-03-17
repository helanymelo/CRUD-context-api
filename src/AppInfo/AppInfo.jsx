import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../GlobalContext/GLobalContext'
import {Container, Card, Btnref} from './AppStyle'


function AppInfo() {

  const {info, handleDelete, refreshData} = useContext(AppContext)  
  
 
  return (
    <div>
       <Btnref>
            <button onClick={refreshData}>REFRESH</button>
       </Btnref>
        
    <Container>
        
            {info.map((item)=>{
                return(
                    <Card key={item.id}>
                        <img src={item.image} />
                        <h2>{item.name}</h2>
                        <p>{item.position}</p>
                        <p>{item.email}</p>
                        <div>
                            <button onClick={()=>handleDelete(item.id)}>DELETE</button>
                        </div>                        
                    </Card>
                )
            })}    
        
    </Container>
    </div>
  )
}

export default AppInfo