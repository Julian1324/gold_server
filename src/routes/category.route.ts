import express, { Router } from "express";
import * as categoryCtrl from '../controllers/category.ctrl';
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();
router.use(express.json());

router.post(`/category`, authMiddleware, categoryCtrl.createCategory);
router.get(`/categories`, categoryCtrl.getCategories);

export { router };