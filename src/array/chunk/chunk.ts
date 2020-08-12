// https://lodash.com/docs/4.17.15#chunk

/**
 * _.chunk(array, [size=1])
 *
 * Creates an array of elements split into groups the length of size.
 * If array can't be split evenly, the final chunk will be the remaining elements.
 *
 * @param array (Array): The array to process.
 *
 * @param [size=1] (number): The length of each chunk
 *
 * @returns (Array): Returns the new array of chunks.
 */
export function chunk<T>(array: T[], size = 1): Array<T[]> {
  const returnArray = [[]];
  let returnArrayIndex = 0;
  let count = 0;
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];

    if (count < size) {
      returnArray[returnArrayIndex].push(element);
      count += 1;
    } else {
      count = 0;
      returnArrayIndex += 1;

      returnArray[returnArrayIndex] = [];
      returnArray[returnArrayIndex].push(element);
    }
  }

  return returnArray;
}
