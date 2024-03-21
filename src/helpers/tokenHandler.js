import jwt from 'jsonwebtoken';
import { constants } from '../context/constants.js';

export const createToken = (payload) => {
    try {
        const options = {
            expiresIn: '4h',
        }
        const myToken = jwt.sign(payload, constants.SECRET_KEY, options);
        console.log('Se ha creado el token:', myToken, "a", payload.email);
        return myToken;
    } catch (error) {
        console.log('Error creando token:',error);
        throw error;
    }
}

export const verifyToken = (tokenToVerify) => {
    try {
        return jwt.verify(tokenToVerify, constants.SECRET_KEY);
    } catch (error) {
        throw error;
    }
}