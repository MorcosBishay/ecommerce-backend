import express, { Router } from "express";
import asyncHandler from "express-async-handler";

import { VegetableController } from "../controllers";
import validate from "../middlewares/validate";
import { getVegetablesWithPagination } from "../validations";

const router: Router = express.Router();

router
  .route("/")
  .get(
    validate(getVegetablesWithPagination),
    asyncHandler(VegetableController.getAllWithPagination)
  );

export default router;
