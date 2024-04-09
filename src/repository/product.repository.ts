import { Types } from "mongoose";
import ProductModel from "../database/models/product.schema";
import * as uuid from 'uuid';

export const createProduct = async (newProduct: any) => {
    newProduct.id = uuid.v1();
    newProduct.category_id = new Types.ObjectId(newProduct.category_id);
    const { id, name, description, price } = await ProductModel.create(newProduct);
    return { id, name, description, price };
}

export const updateProduct = async (query: any,updatedProduct: any) => {
    await ProductModel.updateOne({query},{ $set: { updatedProduct } })
};