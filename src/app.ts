import { connectToDb } from "./config/db";
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import routes from "./routes";
import ApiError from "./utils/ApiError";
import httpStatus from "http-status";
import errorHandler from "./middlewares/error";

dotenv.config();

const app: Express = express();

// enable cors
app.use(cors());
app.options("*", cors());

// Setting proxy
app.set("trust proxy", true);

// set security HTTP headers
app.use(helmet());

// json body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDb();

app.use("/product", routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Endpoint is invalid."));
});

app.use(errorHandler);

export default app;
