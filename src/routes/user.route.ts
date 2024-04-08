import express, { Router } from "express";
import * as userCtrl from '../controllers/user.ctrl';
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();
router.use(express.json());

router.post(`/user/signup`, userCtrl.signUp);
router.post(`/user/signin`, userCtrl.signIn);
router.get(`/user`, authMiddleware, userCtrl.getUser);
router.post(`/user`, authMiddleware, userCtrl.setUser);
router.post(`/userPassword`, authMiddleware, userCtrl.setPassword);

export { router };