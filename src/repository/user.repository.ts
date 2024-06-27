import UserModel from '../database/models/user.schema';
import * as uuid from 'uuid';
import { constants } from '../context/constants';
import ProductModel from '../database/models/product.schema';
import mongoose from 'mongoose';

export const userExist = async (email: string) => await UserModel.findOne({ email, status: constants.ACTIVE_STATUS });

export const signUpUser = async (newUser: any) => {
    newUser.id = uuid.v1();
    const { id, name, email } = await UserModel.create(newUser);
    return { id, name, email };
};

export const getUser = async (id: string) => await UserModel.findOne({ id, status: constants.ACTIVE_STATUS });

export const setUser = async (id: string, name: string, email: string) => await UserModel.updateOne(
    { id }, { $set: { name, email } }
);

export const setUserCart = async (id: string, cart: any) => await UserModel.updateOne({ id }, { $set: { cart } });

export const getCartProducts = async (productsToQuery: any) => {
    const products = await ProductModel.find({ _id: { $in: productsToQuery.flatMap((item: any) => item._id) } }).lean();
    const modifiedProducts = products.map((product, index) => ({
        ...product,
        quantityToBuy: productsToQuery[index].quantityToBuy
      })); 
    return modifiedProducts;
}

export const updateUserWallet = async (_id: mongoose.Types.ObjectId, newWallet: number) => await UserModel.updateOne({ _id }, { $set: { wallet: newWallet } });

export const setPassword = async (id: string, newPassword: string) => await UserModel.updateOne(
    { id }, { $set: { password: newPassword } }
);