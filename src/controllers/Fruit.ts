import { FruitService } from "../services";
import { Fruit } from "../models";
import { IFruit } from "../types";

import Controller from "./Controller";

const fruitService = new FruitService(Fruit);

class FruitController extends Controller<IFruit, FruitService> {}

export default new FruitController(fruitService);
