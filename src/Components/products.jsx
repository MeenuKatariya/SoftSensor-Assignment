import React from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import {  CardProduct } from "./Card";

export const Products = () =>{
    const [store, setStore] = React.useState([])

    const fetchData = async()=>{
        let response = await fetch(`https://fakestoreapi.com/products`)
        let output = await response.json()
       
        setStore(output)
       }

    React.useEffect(()=>{
        fetchData()
        
      },[])

    
      const Sai=()=>{
    

      }
    
  return (<> 
 <div style={{width:"500px",backgroundColor:"grey",position:"fixed",marginTop:"-20px", height:"70px" ,marginLeft:"500px"}}>
    <p style={{fontSize:"20px",fontWeight:"1200px"}}>Fresh Stock</p>
</div>
    <div  style={{backgroundColor:'white'}} >
      


                 {
            store?.map((el,i)=>{
                return(
                    <CardProduct  
                    title={el.title}
                    description={el.description}
                    price={el.price}
                    category={el.category}
                    image={el.image}
                    id={el.id}/>
      
                    
                )
            })
        }

   
    </div>

    </>

  )
}
