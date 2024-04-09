import CategoryModel from '../database/models/category.schema';
import * as uuid from 'uuid';

export const createCategory = async (nameNewCategory: string) => {
    const { name } = await CategoryModel.create({ name: nameNewCategory, id: uuid.v1() });
    return name;
};

export const categoryExists = async (name: string) => await CategoryModel.findOne({ name });

export const getCategories = async () => {
    const categories = await CategoryModel.find();
    return categories.map((category) => { return { id: category.id, name: category.name } });
}