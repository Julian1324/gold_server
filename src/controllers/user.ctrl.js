import * as userRepository from "../repository/user.repository.js";
import { createToken } from "../helpers/tokenHandler.js";
import { hashPassword, verifyPassword } from "../helpers/hashHandler.js";
import { constants } from "../context/constants.js";

const signUp = async ({ body }, res) => {
    try {
        body.password = await hashPassword(body.password);
        body.role = 'client';
        body.status = 'active';
        const userFinded = await userRepository.userExist(body.email);
        if (!!userFinded) return res.status(500).json({ message: constants.USER_ALREADY_EXISTS });
        const newUser = await userRepository.signUpUser(body);
        console.log('Se ha creado el usuario: ', newUser);
        res.json(newUser);
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        throw res.status(500).json({ message: constants.INTERNAL_SERVER_ERROR });
    }
}

const signIn = async ({ body }, res) => {
    try {
        const userFinded = await userRepository.userExist(body.email);
        if (!userFinded) return res.status(400).json({ message: constants.INCORRECT_CREDENTIALS });
        const passwordVerified = await verifyPassword(body.password, userFinded.password);
        if(!passwordVerified) return res.status(500).json({message: constants.INCORRECT_CREDENTIALS});
        const newToken = createToken({ email: body.email });
        res.json({ name: userFinded.name, token: newToken });
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        return res.status(500).json({ message: constants.INTERNAL_SERVER_ERROR });
    }
}

export { signUp, signIn }