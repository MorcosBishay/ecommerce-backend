import express, { Router } from "express";
import asyncHandler from "express-async-handler";

import { ElectronicsController } from "../controllers";
import validate from "../middlewares/validate";
import { getElectronicsWithPagination } from "../validations";

const router: Router = express.Router();

router
  .route("/")
  .get(
    validate(getElectronicsWithPagination),
    asyncHandler(ElectronicsController.getAllWithPagination)
  );

export default router;
