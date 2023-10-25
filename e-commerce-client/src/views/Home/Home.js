import { useEffect, useState } from "react";
import axios from 'axios';
import "./Home.css";

function Home() {
    const [product, setProduct] = useState([])
    const loadProduct = async () => {
        const responce = await axios.get('/products')
        setProduct(responce.data.data)

    }
    useEffect(() => {
        loadProduct()
    }, [])


    return (
        <>
            <h1 className="title"> E-Commerce Products</h1>

            <div className="product-card-d-flex">
                {

                    product.map((productInfo, index) => {
                        const { name, description, brand, price, productImage } = productInfo;

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


                            </div>
                        )
                    })


                }
            </div>


        </>
    )
}
export default Home