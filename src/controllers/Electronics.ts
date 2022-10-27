import { ElectronicsService } from '../services';
import { Electronics } from '../models';
import { IElectronics } from '../types';

import Controller from './Controller';

const electronicsService = new ElectronicsService(Electronics);

class ElectronicsController extends Controller<
  IElectronics,
  ElectronicsService
> {}

export default new ElectronicsController(electronicsService);
