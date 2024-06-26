import express, { Router } from "express";
import * as productCtrl from '../controllers/product.ctrl';
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();
router.use(express.json());

router.post(`/product`, authMiddleware, productCtrl.createProduct);

export { router };