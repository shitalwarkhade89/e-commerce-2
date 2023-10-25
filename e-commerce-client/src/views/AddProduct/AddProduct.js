import React, { useState } from "react";
import "./AddProduct.css";
import axios from 'axios';


function AddProduct() {
    // name, description, brand, price, productImage
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [brand, setBrand] = useState('')
    const [productImage, setProductImage] = useState('')
    const [price, setPrice] = useState('')

    const AddProduct = async () => {
        if (!name || !description || !brand || !productImage || !price) {
            alert('Please Enter all fields')
            return
        }

        const product = {
            name,
            description,
            brand,
            price,
            productImage
        }

        const response = await axios.post('/product', product);
        alert(response.data.message
        )
        setName('')
        setDescription('')
        setPrice('')
        setBrand('')
        setProductImage('')
    }


    return (
        <div>
            <h1 className="heading-add-product"> Add Products </h1>


            < form className="form-container" >
                <input type='text'
                    placeholder='Name'
                    className='form-input'
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }} />
                    <br/>

                <input type='text'
                    placeholder='Description'
                    className='form-input'
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }} />
                    <br/>

                <input type='text'
                    placeholder='price'
                    className='form-input'
                    value={price}
                    onChange={(e) => {
                        setPrice(e.target.value)
                    }} />
                     <br/>

                <input type='text'
                    placeholder='Brand'
                    className='form-input'
                    value={brand}
                    onChange={(e) => {
                        setBrand(e.target.value)
                    }} />
                     <br/>
                     <input type='text'
                    placeholder='Image'
                    className='form-input'
                    value={productImage}
                    onChange={(e) => {
                        setProductImage(e.target.value)
                    }} />
                     <br/>

                <button type="button"
                    className="form-btn"
                    onClick={AddProduct}
                > Add Product </button>




            </form >
        </div>
    )
}
export default AddProduct
