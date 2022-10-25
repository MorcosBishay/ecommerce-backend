import express, { Router } from "express";
import asyncHandler from "express-async-handler";

import { FruitController } from "../controllers";
import validate from "../middlewares/validate";
import { getFruitsWithPagination } from "../validations";

const router: Router = express.Router();

router
  .route("/")
  .get(
    validate(getFruitsWithPagination),
    asyncHandler(FruitController.getAllWithPagination)
  );

export default router;
