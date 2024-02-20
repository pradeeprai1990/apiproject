import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ProductDetails() {
    let userParam=useParams();
    let productId=userParam.id;
    let [productDetails,setproductDetails]=useState({})
    let [productGallery,setProductGallery]=useState([])
    let [singleImage,setSingleImage]=useState('')
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${productId}`)
        .then((res)=>res.data)
        .then((finalRes)=>{
            console.log(finalRes)
            setproductDetails(finalRes)
            setSingleImage(finalRes.thumbnail)
            setProductGallery(finalRes.images)
        })
    },[productId])
  return (
    <div>
        <h1 className='py-[30px] font-bold text-[30px] text-center bg-slate-500'>
            {productDetails.title}
        </h1>

        <div className='max-w-[1320px] py-[30px] mx-auto grid grid-cols-2 gap-8'>
            <div className=''>
                
                <img src={singleImage} className='w-[100%] h-[400px]' alt="" />
                
                <div    className="flex gap-[10px] py-[20px]">
                    {
                       productGallery.map((img,index)=>{
                            return(
                                <div className='basis-[25%]' key={index}>
                                    <img  src={img} 
                                    onClick={()=> setSingleImage(img)  }            
                                    className='w-[100%]  h-[80px]'  alt="" />
                                </div>
                          
                            )
                        })
                    }
                  
                   
                   
                </div>
            </div>
            <div className=''>
                <h2 className='text-[25px] font-bold'> {productDetails.title}</h2>
                <p>Rs  {productDetails.price}</p>
                <p> {productDetails.description}</p>
            </div>
        </div>
        <Link to={'/'} className='mx-auto table bg-[red] p-[10px]'>Back To Home</Link>
    </div>

  )
}
