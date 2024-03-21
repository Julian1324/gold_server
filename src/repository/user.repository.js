import UserModel from '../database/models/user.schema.js';
import * as uuid from 'uuid';

export const userExist = async (email) => {
    return await UserModel.findOne({ email });
}

export const signUpUser = async (newUser) => {
    newUser.id = uuid.v1();
    return await UserModel.create(newUser)
};