import express, { Router } from "express";
import * as userCtrl from '../controllers/user.ctrl.js';

const router = Router();
router.use(express.json());

router.post( `/user/signup`, userCtrl.signUp );
router.post( `/user/signin`, userCtrl.signIn );

export { router };