import React from 'react'
import { useState, useEffect } from 'react'
import Layout from '../../Components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoint'
import ProductCard from '../../Components/Product/ProductCard'
import Loader from '../../Components/Loader/Loader'
function ProductDetail() {
    const {productId} = useParams()
    const [product, setProduct] = useState([])
    const [isLoading, setisLoading] = useState( false)
    useEffect(() => {
        setisLoading(true)
       axios.get( `${productUrl}/products/${productId}`)
       .then((res)=>{
        setProduct(res.data)
        setisLoading(false)

       }).catch((err)=>{
        console.log(err)
       })
    }, [])
    
  return (
    < Layout>
    {isLoading? (<Loader/>):(<ProductCard/>)}
    <div>
      < ProductCard
    product={product}
    />

    </div>
     
    </ Layout>

  )
}

export default ProductDetail