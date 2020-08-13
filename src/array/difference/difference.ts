// https://lodash.com/docs/4.17.15#difference

/**
 * _.difference(array)
 *
 * Creates an array of array values not included in the other
 * given arrays using SameValueZero for equality comparisons.
 * The order and references of result values are determined by the first array.
 *
 * Note: Unlike _.pullAll, this method returns a new array.
 *
 * @param array (Array): The array to inspect.
 *
 * @param [values] (...Array): The values to exclude.
 *
 * @returns (Array): Returns the new array of filtered values.
 */

export function difference(array1: any[], array2: any[]): Array<any> {
  const array = [];
  for (let i = 0; i < array1.length; i += 1) {
    const item2 = array2[i];
    if (!(array1.includes(item2) || (Number.isNaN(array1[i]) && Number.isNaN(item2)))) {
      array.push(array1[i]);
    }
  }

  return array;
}
