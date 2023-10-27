import React, { useEffect, useState } from "react";
import "./UpdateProduct.css";
import axios from 'axios';
import { useParams } from "react-router-dom";


function UpdateProduct() {
    // name, description, brand, price, productImage
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [brand, setBrand] = useState('')
    const [productImage, setProductImage] = useState('')
    const [price, setPrice] = useState('')

    const {_id} = useParams();

    const loadProduct = async () => {
        const response = await axios.get(`/product/${_id}`)

        const {name,description,brand,productImage,price} =response?.data?.data

        setName(name)
        setDescription(description)
        setBrand(brand)
        setProductImage(productImage)
        setPrice(price)
    }

    useEffect(() => {
       loadProduct ();
    },[] )

    const UpdateDetails = async () => {
        const  UpdateDetails ={name,description,price,brand,productImage,_id}

        const  response = await axios.put(`/product/${_id}`,UpdateDetails);

        alert(response?.data?.message)

        
    }
        // if (!name || !description || !brand || !productImage || !price) {
        //     alert('Please Enter all fields')
        //     return
        // }

    //     const product = {
    //         name,
    //         description,
    //         brand,
    //         price,
    //         productImage
    //     }

    //     const response = await axios.post('/product', product);
    //     alert(response.data.message
    //     )
    //     setName('')
    //     setDescription('')
    //     setPrice('')
    //     setBrand('')
    //     setProductImage('')
    // }


    return (
        <div>
            <h1 className="heading-add-product"> Update Products </h1>


            < form className="form-container" >
                <input type='text'
                    placeholder='Name'
                    className='form-input'
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }} />
                <br />

                <input type='text'
                    placeholder='Description'
                    className='form-input'
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }} />
                <br />

                <input type='text'
                    placeholder='price'
                    className='form-input'
                    value={price}
                    onChange={(e) => {
                        setPrice(e.target.value)
                    }} />
                <br />

                <input type='text'
                    placeholder='Brand'
                    className='form-input'
                    value={brand}
                    onChange={(e) => {
                        setBrand(e.target.value)
                    }} />
                <br />
                <input type='text'
                    placeholder='Image'
                    className='form-input'
                    value={productImage}
                    onChange={(e) => {
                        setProductImage(e.target.value)
                    }} />
                <br />

                <button type="button"
                    className="form-btn"
                    onClick={UpdateDetails}
                > Update Product </button>




            </form >
        </div>
    )
}
export default UpdateProduct
