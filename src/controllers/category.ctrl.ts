import { constants } from "../context/constants";
import { myLogger } from "../utils/logger";
import * as categoryRepository from "../repository/category.repository";
import { getUser } from "../repository/user.repository";

export const createCategory = async (req: any, res: any) => {
    try {
        const { name } = req.body;
        const { id } = req.token;
        const userFinded = await getUser(id);
        if(!userFinded) {
            myLogger.error(constants.USER_DOESNT_EXIST);
            return res.status(500).json(constants.USER_DOESNT_EXIST)
        }
        
        if (userFinded.role !== constants.SU_ADMIN_USER_ROLE) {
            myLogger.error(constants.USER_WITHOUT_PERMISSION +' '+ userFinded.email);
            return res.status(500).json(constants.USER_WITHOUT_PERMISSION);
        }

        const categoryFinded = await categoryRepository.categoryExists(name);
        if (!!categoryFinded) return res.status(500).json(constants.CATEGORY_EXISTS);
        const newCategoryName = await categoryRepository.createCategory(name);
        myLogger.info(constants.CATEGORY_CREATED + newCategoryName);
        res.json(newCategoryName);
    } catch (error) {
        myLogger.error(constants.PROCESS_ERROR + error);
        throw res.status(500).json(constants.INTERNAL_SERVER_ERROR);
    }
}