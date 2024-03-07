import Product from "../models/ProductModel.js";
import User from "../models/UserModel.js";

export const getProducts = async (req, res) =>{
    try {
        let response;
        if(req.role === "admin"){
            response = await Product. findAll({
                include :[{
                    model: User
                }]
            });
        }else{
            response = await Product. findAll({
                where: {
                    userId: req.userId
                },
                include :[{
                    model: User
                }]
            });
        }
        res.status(200).json(respons);
    } catch {error} {
        res.status(500).json({msg: error.messege});

    }

}

export const getProductsById = (req, res) =>{

}

export const createProduct = async(req, res) =>{
    const {name, price} =req.body;
    try {
        await Product.create({
            name: name,
            price: price,
            userId: req.userId
        });
        res.status(201).json({msg: "Product Created Successfuly"});
        
    } catch (error) {
        res.status(500).json({msg: error.messege});
        
    }

}

export const updateProduct = (req, res) =>{

}

export const deleteProduct = (req, res) =>{
    
}