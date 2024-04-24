import { Types } from "mongoose";
import ProductModel from "../database/models/product.schema";
import * as uuid from 'uuid';
import { constants } from "../context/constants";
import { myProductsFilter } from "../helpers/filtersHandler";

export const createProduct = async (newProduct: any) => {
    newProduct.id = uuid.v1();
    newProduct.category_id = new Types.ObjectId(newProduct.category_id);
    const { id, name, description, price, discount, status } = await ProductModel.create(newProduct);
    return { id, name, description, price, discount, status };
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

    const productsPaginated = await ProductModel.paginate({ category_id: new Types.ObjectId(category_id) }, options, myProductsFilter);
    return productsPaginated;
}

export const getProduct = async (_id: string) => await ProductModel.findOne({ _id: new Types.ObjectId(_id) });

export const getAllProductsPage = async (page: number) => {
    const options = {
        page,
        limit: constants.DEFAULT_PAGES_PAGINATE,
        sort: { createdAt: -1 },
    }

    const productsPaginated = await ProductModel.paginate({}, options, myProductsFilter);
    return productsPaginated;
}