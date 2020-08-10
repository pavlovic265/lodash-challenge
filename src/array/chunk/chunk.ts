// https://lodash.com/docs/4.17.15#chunk

// const arrayStart = array.splice(0, size);
// return [arrayStart, array];

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
