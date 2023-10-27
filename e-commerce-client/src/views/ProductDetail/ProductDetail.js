import React, { useEffect, useState } from "react";
import "./ProductDetail.css"
import {useParams} from 'react-router-dom';
import axios from "axios";

function ProductDetail() {
    const [product , setProduct] =useState ({

    })

    const {_id} =useParams()
    const loadProduct =async () => {
        const response =await axios.get(`/product/${
            _id}`)
        setProduct (response?.data?.data)
    }

    useEffect(() => {
        loadProduct();
    },[])
return(
    <>
    <h1 className="text-center">Product Details</h1>
    <p className="text-center"> Product ID : {_id}</p>

    <div className="product-detail-conatiner">
        <div className="img-cont">
        <img src={product?.productImage} className="product-image"/>
        </div>
        <div className="details-cont">
           <h1 className="product-name">{product?.name}</h1>
           <p className="description">{product?.description}</p>
           <p className="description">{product?.content}</p>
        
           <div className="d-flex">
            <h3>{product?.brand}</h3>
            <h3>RS :- {product?.price}/-</h3>
           </div>

        </div>
    </div>
    </>
)
}
export default ProductDetail