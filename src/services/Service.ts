import { Document, FilterQuery, Model as MongooseModel } from 'mongoose';
import autoBind from 'auto-bind';

import { ServiceOptions, Documents } from '../types/global';

export default class Service<IModel extends Document> {
  model: MongooseModel<IModel>;
  constructor(model: MongooseModel<IModel>) {
    this.model = model;
    autoBind(this);
  }

  /**
   * Query documents
   * @param {object} filter - Mongo filter body
   * @param {object} options - Query options
   * @param {object} [options.populate] - Mongoose population object
   * @param {string} [options.select] - Mongoose projection string
   * @param {string} [options.sort] - Mongoose sort string
   * @param {number} [options.skip] - Number of documents to skip
   * @param {number} [options.limit] - Number of documents to return after skipped ones
   * @returns {Promise<{ pages: number, documents: [object] }>} Object of found documents and pages number
   */
  async getAllWithPagination(
    filter: FilterQuery<IModel>,
    options: ServiceOptions = {},
  ): Promise<Documents<IModel>> {
    const Model = this.model;
    if (filter.search) {
      filter.$text = { $search: filter.search };
      delete filter.search;
    }
    let skippedValue = 0;
    if (options.limit && options.page)
      skippedValue = options.limit * (options.page - 1);

    const documents: IModel[] = await Model.find(filter)
      .populate(options.populate)
      .select(options.select)
      .sort(options.sort)
      .skip(skippedValue)
      .limit(parseInt(`${options.limit}`, 10))
      .lean({ virtuals: true });

    const count = await Model.countDocuments(filter);
    if (options.limit) {
      const pages = Math.ceil(count / options.limit);
      const next = Number(options.page) + 1;
      const nextPage = next <= pages ? next : null;
      return { pages, documents, count, nextPage };
    }

    return { count, documents };
  }

  /**
   * Query documents
   * @param {object} filter - Mongo filter body
   * @param {object} options - Query options
   * @param {object} [options.populate] - Mongoose population object
   * @param {string} [options.select] - Mongoose projection string
   * @param {string} [options.sort] - Mongoose sort string
   * @param {number} [options.skip] - Number of documents to skip
   * @param {number} [options.limit] - Number of documents to return after skipped ones
   * @returns {Promise<{ pages: number, documents: [object] }>} Object of found documents and pages number
   */
  async getAll(
    filter: FilterQuery<IModel> = {},
    options: ServiceOptions = { sort: '', limit: 0, page: 0 },
  ): Promise<Documents<IModel>> {
    const Model = this.model;
    if (filter.search) {
      filter.$text = { $search: filter.search };
      delete filter.search;
    }
    const documents: IModel[] = await Model.find(filter)
      .populate(options.populate)
      .select(options.select)
      .sort(options.sort)
      .lean({ virtuals: true });
    // eslint-disable-next-line @typescript-eslint/await-thenable
    const count = await documents.length;
    if (options.limit) {
      const pages = Math.ceil(count / options.limit);
      return { pages, documents };
    }
    return { count, documents };
  }
}
