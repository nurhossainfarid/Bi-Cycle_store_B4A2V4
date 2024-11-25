import { TProduct, TUpdateProductData } from "./product.interface";
import { ProductModel } from "./product.model";


// Create a product
const createProductIntoDB = async (product: TProduct) => {
    const result = await ProductModel.create(product);
    return result;
}

// Get All products
const getAllProductsFromDB = async (searchTerm: object) => {
    const result = await ProductModel.find(searchTerm);
    return result;
}

// Get a specific product by id
const getSpecificProductFromDB = async (productId: string) => {
    const result = await ProductModel.findById({ _id: productId});
    return result;
}

// Update a product by id
const updateProductIntoDB = async (productId: string, updateData: TUpdateProductData) => {
    const result = await ProductModel.findByIdAndUpdate({ _id: productId}, {$set: updateData}, {new: true });
    return result;
}

// Delete a product by 
const deleteProductFromDB = async (productId: string) => {
    const result = await ProductModel.deleteOne({ _id: productId});
    return result;
}


export const ProductServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSpecificProductFromDB,
    updateProductIntoDB,
    deleteProductFromDB
}