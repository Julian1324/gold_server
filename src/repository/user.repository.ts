import UserModel from '../database/models/user.schema';
import * as uuid from 'uuid';
import { constants } from '../context/constants';

export const userExist = async (email: string) => await UserModel.findOne({ email, status: constants.USER_ACTIVE_STATUS });

export const signUpUser = async (newUser: any) => {
    newUser.id = uuid.v1();
    const { id, name, email } = await UserModel.create(newUser);
    return { id, name, email };
};

export const getUser = async (id: string) => await UserModel.findOne({ id, status: constants.USER_ACTIVE_STATUS });

export const setUser = async (id: string, name: string, email: string) => await UserModel.updateOne(
    { id }, { $set: { name, email } }
);

export const setPassword = async (id: string, newPassword: string) => await UserModel.updateOne(
    { id }, { $set: { password: newPassword } }
);