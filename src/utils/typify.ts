/**
 * Create an object composed of the keys properties in format of key value or null
 * @param {object} object - given object
 * @returns {object} object composed of the keys properties in format of key value or null
 */
const typify = (object: any): object =>
  Object.keys(object).reduce((obj: any, key: string): object => {
    if (Object.prototype.toString.call(object[key]) === '[object String]') {
      const lowerCase: string = object[key].toLowerCase();
      const int: number = parseInt(`${/^-?\d+$/.exec(lowerCase)}`, 10);
      const float: number = parseFloat(`${/^\d+\.\d+$/.exec(lowerCase)}`);
      if (
        lowerCase === '' ||
        lowerCase === ' ' ||
        lowerCase === 'null' ||
        lowerCase === 'undefined'
      )
        obj[key] = null;
      else if (int || float) obj[key] = Number(object[key]);
      else if (lowerCase === 'true' || lowerCase === 'false')
        obj[key] = JSON.parse(lowerCase);
      else obj[key] = object[key];
    } else if (Array.isArray(object[key])) {
      if (object[key].length) obj[key] = object[key];
    } else if (typeof object[key] === 'object') obj[key] = typify(object[key]);
    else obj[key] = object[key];
    return obj;
  }, {});

export default typify;
