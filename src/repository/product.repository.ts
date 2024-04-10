import { Types } from "mongoose";
import ProductModel from "../database/models/product.schema";
import * as uuid from 'uuid';
import { constants } from "../context/constants";

export const createProduct = async (newProduct: any) => {
    newProduct.id = uuid.v1();
    newProduct.category_id = new Types.ObjectId(newProduct.category_id);
    const { id, name, description, price } = await ProductModel.create(newProduct);
    return { id, name, description, price };
}

export const updateProduct = async (query: any, updatedProduct: any) => {
    await ProductModel.updateOne({ query }, { $set: { updatedProduct } })
};

export const getProductsPage = async (page: number, category_id: any) => {
    const options = {
        page,
        limit: constants.DEFAULT_PAGES_PAGINATE,
        sort: { createdAt: -1 },
    }

    const myFilter = (err: any, result: any) => {
        if (!!err) return err;
        return result.docs.reduce((acc: any, currentValue: any) => {
            acc.push(
                {
                    _id: currentValue._id,
                    category_id: currentValue.category_id,
                    name: currentValue.name,
                    price: currentValue.price
                }
            );
            return acc;
        }, []);
    }

    const productsPaginated = await ProductModel.paginate({ category_id: new Types.ObjectId(category_id) }, options, myFilter);
    return productsPaginated;
}