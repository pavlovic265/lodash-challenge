// https://lodash.com/docs/4.17.15#compact

/**
 * _.compact(array)

 *
 * Creates an array with all falsey values removed. The values false,
 * null, 0, "", undefined, and NaN are falsey.
 *
 * @param array (Array): The array to compact.
 *
 * @returns (Array): Returns the new array of filtered values.
 */

type FalseyType = boolean | null | number | string | undefined;

const falseyValues: FalseyType[] = [null, 0, false, "", undefined];
function isTruthyValue(value: FalseyType): boolean {
  if (Number.isNaN(value)) {
    return false;
  }

  if (falseyValues.includes(value)) {
    return false;
  }

  return true;
}
export function compact<T extends FalseyType>(array: T[]): Array<T> {
  const returnArray = [];
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];

    if (isTruthyValue(element)) {
      returnArray.push(element);
    }
  }

  return returnArray;
}
