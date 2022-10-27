import express, { Router } from "express";

import electronicsRoute from "./ElectronicsRoute";
import fruitRoute from "./FruitRoute";
import vegetableRoute from "./VegetableRoute";

const router: Router = express.Router();

router.use("/electronics", electronicsRoute);
router.use("/fruits", fruitRoute);
router.use("/vegetables", vegetableRoute);

export default router;
