import { Request, Response, NextFunction } from 'express';
import getErrorMessage from '../utils/handleErrors';
import { verifyToken } from '../helpers/tokenHandler';
import { JwtPayload } from 'jsonwebtoken';
import { myLogger } from '../utils/logger';

interface CustomRequest extends Request {
    token: string | JwtPayload;
}

export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const token = req.header("Authorization")?.replace("Bearer ", "");
        if (!token) throw Error('Por favor autenticate.');

        const decoded = verifyToken(token);
        (req as CustomRequest).token = decoded;

        next();
    } catch (error) {
        myLogger.error(error);
        res.status(401).json(getErrorMessage(error));
    }
}