import * as userRepository from "../repository/user.repository";
import { createToken } from "../helpers/tokenHandler";
import { hashPassword, verifyPassword } from "../helpers/hashHandler";
import { constants } from "../context/constants";
import { myLogger } from "../utils/logger";

export const signUp = async ({ body }: any, res: any) => {
    try {
        body.password = await hashPassword(body.password);
        body.role = constants.USER_DEFAULT_ROLE;
        body.status = constants.USER_DEFAULT_STATUS;
        const userFinded = await userRepository.userExist(body.email);
        if (!!userFinded) return res.status(500).json(constants.USER_ALREADY_EXISTS);
        const newUser = await userRepository.signUpUser(body);
        myLogger.info(constants.USER_SIGNED_UP + newUser.id);
        res.json(newUser);
    } catch (error) {
        myLogger.error(constants.PROCESS_ERROR + error);
        throw res.status(500).json(constants.INTERNAL_SERVER_ERROR);
    }
}

export const signIn = async ({ body }: any, res: any) => {
    try {
        const userFinded = await userRepository.userExist(body.email);

        if (!userFinded) {
            myLogger.error(constants.USER_DOESNT_EXIST);
            return res.status(400).json(constants.USER_DOESNT_EXIST)
        }

        const passwordVerified = await verifyPassword(body.password, userFinded.password);

        if (!passwordVerified) {
            myLogger.error(constants.INCORRECT_CREDENTIALS + ' ' + userFinded.email);
            return res.status(500).json(constants.INCORRECT_CREDENTIALS)
        }

        const newToken = createToken({ id: userFinded.id });
        res.json({ name: userFinded.name, token: newToken });
    } catch (error) {
        myLogger.error(constants.PROCESS_ERROR + error);
        return res.status(500).json(constants.INTERNAL_SERVER_ERROR);
    }
}

export const getUser = async (req: any, res: any) => {
    try {
        const userFinded = await userRepository.getUser(req.token.id);
        if (!userFinded) {
            myLogger.error(constants.USER_DOESNT_EXIST);
            return res.status(500).json(constants.USER_DOESNT_EXIST);
        }
        res.status(200).json({ name: userFinded.name, email: userFinded.email });
    } catch (error) {
        myLogger.error(constants.PROCESS_ERROR + error);
        return res.status(500).json(constants.INTERNAL_SERVER_ERROR);
    }
}

export const setUser = async (req: any, res: any) => {
    try {
        const { id } = req.token;
        const { name, email } = req.body;
        const { modifiedCount } = await userRepository.setUser(id, name, email);
        if (modifiedCount) return res.status(200).json(constants.USER_MODIFIED);
        res.status(500).json(constants.UNKNOWN_ERROR);
    } catch (error) {
        myLogger.error(constants.PROCESS_ERROR + error);
        return res.status(500).json(constants.INTERNAL_SERVER_ERROR);
    }
}

export const setPassword = async (req: any, res: any) => {
    try {
        const { currentPassword, newPassword } = req.body;
        const { id } = req.token;
        const userFinded = await userRepository.getUser(id);
        if (!userFinded) {
            myLogger.error(constants.USER_DOESNT_EXIST);
            return res.status(500).json(constants.USER_DOESNT_EXIST);
        }
        const verifiedPassword = await verifyPassword(currentPassword, userFinded.password);
        if (!verifiedPassword) return res.status(500).json(constants.USER_WRONGPASS);
        const newPasswordHashed = await hashPassword(newPassword);
        const { modifiedCount } = await userRepository.setPassword(id, newPasswordHashed);
        if (modifiedCount) return res.status(200).json(constants.USER_PASSCHANGED);
        res.status(500).json(constants.UNKNOWN_ERROR);
    } catch (error) {
        myLogger.error(constants.PROCESS_ERROR + error);
        return res.status(500).json(constants.INTERNAL_SERVER_ERROR);
    }
}