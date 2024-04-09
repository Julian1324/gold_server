import { myLogger } from "../utils/logger";
import { constants } from "../context/constants";
import { getUser } from "../repository/user.repository";
import * as productRepository from "../repository/product.repository";

export const createProduct = async (req: any, res: any) => {
    try {
        const { token, body } = req;
        const userFinded = await getUser(token.id);

        if (!userFinded) {
            myLogger.error(constants.USER_DOESNT_EXIST);
            return res.status(500).json(constants.USER_DOESNT_EXIST);
        }

        if (userFinded.role !== constants.SU_ADMIN_USER_ROLE) {
            myLogger.error(constants.USER_WITHOUT_PERMISSION + ' ' + userFinded.email);
            return res.status(500).json(constants.USER_WITHOUT_PERMISSION);
        }

        const newProduct = await productRepository.createProduct(body);
        myLogger.info(constants.PRODUCT_CREATED + newProduct.id);
        res.json(newProduct);
    } catch (error) {
        myLogger.error(constants.PROCESS_ERROR + error);
        throw res.status(500).json(constants.INTERNAL_SERVER_ERROR);
    }
}

export const getProductsByCategory = async (req: any, res: any) => {
    try {
        const { category_id } = req.query;
        const productsPaginated = await productRepository.getProductsPage(1, category_id);
        res.json(productsPaginated);
    } catch (error) {
        myLogger.error(constants.PROCESS_ERROR + error);
        throw res.status(500).json(constants.INTERNAL_SERVER_ERROR);
    }
}