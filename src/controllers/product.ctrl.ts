import { myLogger } from "../utils/logger";
import { constants } from "../context/constants";

export const createProduct = async (req: any, res: any) => {
    try {
        const { name, image, price } = req.body;
        console.log(name, image, price);
        res.json('My respuesta');
    } catch (error) {
        myLogger.error(constants.PROCESS_ERROR + error);
        throw res.status(500).json(constants.INTERNAL_SERVER_ERROR);
    }
}