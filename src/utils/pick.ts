import _ from 'lodash';

/**
 * Create an object composed of the picked object properties
 * @param {object} object - given object
 * @param {string[]} keys - given keys
 * @returns {object} an object composed of the picked object properties
 */
const pick = (object: object, keys: string[]): object => _.pick(object, keys);

export default pick;
