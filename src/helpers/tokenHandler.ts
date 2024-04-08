import jwt from 'jsonwebtoken';
import { constants } from '../context/constants';
import { myLogger } from '../utils/logger';

export const createToken = (payload: any) => {
    try {
        const options = {
            expiresIn: constants.TOKEN_EXPIRATION_TIME,
        }
        const myToken = jwt.sign(payload, constants.SECRET_KEY, options);
        myLogger.info(constants.USER_SIGNED_IN+payload.id);
        return myToken;
    } catch (error) {
        myLogger.error(constants.TOKEN_ERROR+error);
        throw error;
    }
}

export const verifyToken = (tokenToVerify: any) => {
    try {
        return jwt.verify(tokenToVerify, constants.SECRET_KEY);
    } catch (error) {
        throw error;
    }
}