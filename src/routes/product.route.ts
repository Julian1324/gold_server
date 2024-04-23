import express, { Router } from "express";
import * as productCtrl from '../controllers/product.ctrl';
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();
router.use(express.json());

router.post(`/product`, authMiddleware, productCtrl.createProduct);
router.get(`/productsByCategory`, productCtrl.getProductsByCategory);
router.get(`/product`, productCtrl.getProductByID);
router.get(`/products`, productCtrl.getAllProducts);

export { router };