import express, { Router } from "express";

import electronicsRoute from "./ElectronicsRoute";
import fruitRoute from "./FruitRoute";
import vegetableRoute from "./VegetableRoute";

const router: Router = express.Router();

router.use("/electronics", electronicsRoute);
router.use("/fruit", fruitRoute);
router.use("/vegetable", vegetableRoute);

export default router;
