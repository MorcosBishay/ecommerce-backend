import { VegetableService } from "../services";
import { Vegetable } from "../models";
import { IVegetable } from "../types";

import Controller from "./Controller";

const vegetableService = new VegetableService(Vegetable);

class VegetableController extends Controller<IVegetable, VegetableService> {}

export default new VegetableController(vegetableService);
