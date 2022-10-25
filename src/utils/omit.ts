import _ from 'lodash';

/**
 * Create an object composed of the object properties without omitted ones
 * @param {object} object - given object
 * @param {string[]} keys - given keys
 * @returns {object} an object composed of the object properties without omitted ones
 */
const omit = (object: object, keys: string[]): object => _.omit(object, keys);

export default omit;
