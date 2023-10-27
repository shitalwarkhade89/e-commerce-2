import { useEffect, useState } from "react";
import axios from 'axios';
import "./Home.css";

function Home() {
    const [product, setProduct] = useState([])
    const loadProduct = async () => {
        const responce = await axios.get('/products')
        setProduct(responce.data.data)

    }

    const deleteProduct = async(_id) => {
        const response = await axios.delete (`/product/${_id}`)
        if(true){
       loadProduct();     
   

        }
    
    }

    useEffect(() => {
        loadProduct()
    }, [])


    return (
        <>
            <h1 className="title"> E-Commerce Products</h1>

            <div className="product-card-d-flex"
            >
                {

                    product.map((productInfo, index) => {
                        const { _id, name, description, brand, price, productImage } = productInfo;

                        return (
                            <div className="product-conteiner">
                                <div>
                                    <img src={productImage} className="product-image" />
                                </div>

                                <h1 className="product-name">{name}</h1>
                                <p className=" product-description">{description}</p>
                                <div className="d-flex">
                                    <h3 className="product-brand">{brand}</h3>
                                    <h3 className="product-price"> RS:{price}/-</h3>
                                </div>
                                <div className="btn-d-flex">
                                    <a href={`/product-detail/${_id}`} target="_blank"><button className="product-detail-btn">View More</button></a>
                                    <button className="product-detail-btn btn-color">🛒Buy Now</button>
                                </div>
                                <button className="btn-delete-student"
                                 onClick={() => {
                                    deleteProduct (_id)
                                    }}>
                                    ❌</button>
                                    <a href={`/update/${_id}`} target="_blank"><button className="btn-update">✏️</button></a>
                                  


                            </div>
                        )
                    })


                }
            </div>


        </>
    )
}
export default Home