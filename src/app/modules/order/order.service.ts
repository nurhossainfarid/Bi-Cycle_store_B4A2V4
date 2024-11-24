import { TProduct, TUpdateProductData } from "./order.interface";
import { ProductModel } from "./order.modal";

// Create a product
const createProductIntoDB = async (product: TProduct) => {
    const result = await ProductModel.create(product);
    return result;
}

// Get All products
const getAllProductsFromDB = async () => {
    const result = await ProductModel.find();
    return result;
}

// Get a specific product by id
const getSpecificProductFromDB = async (productId: string) => {
    const result = await ProductModel.findById({ _id: productId});
    return result;
}

// Update a product by id
const updateProductIntoDB = async (productId: string, updateData: TUpdateProductData) => {
    const result = await ProductModel.updateOne({ _id: productId}, {$set: updateData});
    return result;
}

// Delete a product by 
const deleteProductFromDB = async (productId: string) => {
    const result = await ProductModel.updateOne({ _id: productId}, {isDeleted: true});
    return result;
}


export const ProductServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSpecificProductFromDB,
    updateProductIntoDB,
    deleteProductFromDB
}