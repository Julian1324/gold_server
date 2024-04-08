import { Router } from "express";
import { router as userRoutes } from './user.route';
import { router as productRoutes } from './product.route';
import { router as categoryRoutes } from './category.route';

const router = Router();

router.use(userRoutes);
router.use(productRoutes);
router.use(categoryRoutes);

export { router };