import styled from "styled-components"

export const Container = styled.div`
    display:flex ;
   
    justify-content:center ;
    gap: 2vw;
    flex-wrap:wrap ;
    margin-top:6em ;
    padding-bottom:4em ;
  

`
export const Card = styled.div`
    width:300px ;
    border:1px solid #475d;
    border-radius: 10px;   
    height:380px ;
    margin-top:2em ;
    
img{
 
    height:180px ;
    width:100% ;
    object-fit:cover ;
    border-top-left-radius: 7px;  
    border-top-right-radius:7px ;
    
}

h2{
    text-align:center ;
    padding-bottom:0.5em ;
    color: #ddd;
    font-weight:700;
}

p{
    text-align:center ;
    padding-bottom:0.5em ;
    color: #ddd;
    font-weight:700;
}

div{
    margin-top:2em ;
    text-align:center ;
    
}

button{
    width:200px ;
    border:1px solid #375d57;
    transition: all 0.5s;
    cursor:pointer ;
    
}

button:hover{
    background-color: #375d;
  
}

`

export const Btnref = styled.button`
    position: absolute;
    position:fixed ;
    top: 4%;
    right: 4%;
    height: 4em;
    width: 4em;
    border-radius: 50%;
    border: none;
    background-color: #375d57;
    color: #ddd;
    font-size: 1em;    
    transition: all 0.5s;
   
   
    




 button{
    border: none ;
    background:transparent ;
    cursor: pointer;
   
    
 }

&:hover{
    background-color:#375d ;
}
`