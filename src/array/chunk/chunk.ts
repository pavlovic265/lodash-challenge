// https://lodash.com/docs/4.17.15#chunk

type ChunkReturnType = any[];

export function chunk(array: any[], size = 1): ChunkReturnType {
  // const arrayStart = array.splice(0, size);
  // return [arrayStart, array];
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
