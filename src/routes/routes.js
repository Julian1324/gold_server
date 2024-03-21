import { Router } from "express";
import { router as userRoutes } from './user.route.js';

const router = Router();

router.use(userRoutes);

export { router };