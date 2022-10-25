import mongoose from 'mongoose';

import { config } from './config';
import logger from './logger';

const connectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  retryWrites: false,
};

export const connectToDb = () => {
  mongoose
    .connect(config.mongoose.url, connectOptions)
    .then((con) => {
      logger.info('Connected to MongoDB');
      return con;
    })
    .catch((error) => logger.error(error));
};
