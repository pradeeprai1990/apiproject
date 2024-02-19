import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  let [products,setProducts]=useState([])
  let getProduct=()=>{
    axios.get('https://dummyjson.com/products')
    .then((Res)=>Res.data)
    .then((finalRes)=>{
      console.log(finalRes.products)
      setProducts(finalRes.products)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
 

 

  useEffect(()=>{
    getProduct()
    
  },[])

  return (
    <div className="App">
      
      <h1 className='text-[40px] font-bold py-[48px]'>Our Products</h1>
      <div className='max-w-[1320px] mx-auto grid grid-cols-4 gap-[20px]'>
        {
           products.length>1 ?
           products.map((items,index)=>{
            return(
              <ProductCard items={items} key={index}/>
            )
           })
          
           :
           <div>Loading......</div>
        }
       
       
       
      </div>
    </div>
  );
}

export default App;

function ProductCard({items}){
  return(
    <div className='shadow-lg'>
      <img className='w-[100%] h-[250px]' src={items.thumbnail}/>
      <h3 className='text-[20px] text-center py-[15px] bg-red-900 text-white'>
        {items.title}
      </h3>
  </div>
  )
}
