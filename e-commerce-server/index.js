import express from "express";
import mongoose, { model, Schema } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import product from "./models/product.js";



const app = express();
app.use(express.json());

const PORT = 5000;

// mongodb connection
const MONGODB_URI = ''
const connectMongoDb = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    if (conn) {
        console.log('Mongodb connected succesfully.');
    }
};
connectMongoDb();

app.get('/health', (req, res) => {
    res.json({
        
        message: 'all good',
    })
});


// Post product
app.post('/product', async (req, res) => {
    
    const { name, description, price, productImage, brand,content} = req.body;
    let newProduct = new product({
        name: name,
        description: description,
        price: price,
        productImage: productImage,
        brand: brand,
        content:content,
    })
    const saveProduct = await newProduct.save();


    res.json({
        message: 'e-commerce products',
        data: saveProduct,
    })
});
// get all products
app.get('/products', async (req, res) => {

    const findProduct = await product.find()

    res.json({
        data: findProduct,
        message: "get products data  successfully"
    })


});
// get one product by their id
app.get('/product/:_id', async (req, res) => {

    const {_id } = req.params;
    const findProductData = await product.findById(_id);

    res.json({
        data: findProductData,
        message: 'get product successfully'
    })
});

// delete 
app.delete('/product/:_id', async (req, res) => {
    const { _id } = req.params;
    await product.deleteOne({ _id });
    res.json({
        status: 'sucsees'
    })
});

// update product
app.put('/product/:_id', async (req, res) => {
    const { _id } = req.params;
    const { name, description, price, productImage, brand,content } = req.body;

    await product.updateOne(
        { _id:_id },
        {
            $set: { name: name, content:content,description: description, price: price, productImage: productImage, brand: brand }
        }
    );
    const findProduct = await product.findOne({ _id:_id });
    res.json({
        success: true,
        data: findProduct,
        message: 'Update product successfully',
    })

});

// Patch method update spesific data

app.patch("/product/:_id", async (req, res) => {
    const { _id } = req.params;
    const { name, description, price, productImage, brand,content } = req.body;
  
    const data = await product.findById(_id);
  
    if (name) {
    data.name = name;
    }
  
    if (description) {
      data.description = description;
    }
    if (price) {
      data.price = price;
    }
    if (productImage) {
      data.productImage = productImage;
    }
    if (brand) {
      data.brand = brand;
    }
    if (content) {
        data.content = content;
      }
  
    const updateSpecificData = await data.save();
  
    res.json({
      status: "success",
      data: updateSpecificData,
      message: "Update Successful",
    });
  });

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}.`);
});