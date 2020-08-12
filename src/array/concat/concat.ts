// https://lodash.com/docs/4.17.15#concat

/**
 * _.concat(array)

 *
 * Creates a new array concatenating array with any additional arrays and/or values.
 *
 * @param array (Array): The array to concatenate.
 * 
 * @param [values] (...*): The values to concatenate.
 *
 * @returns (Array): Returns the new concatenated array.
 */

export function concat<T>(array: T[], ...values: any): Array<T> {
  if (!values) {
    return array;
  }

  for (let i = 0; i < values.length; i += 1) {
    const element = values[i];
    if (Array.isArray(element)) {
      array.push(...element);
    } else {
      array.push(element);
    }
  }

  return array;
}
