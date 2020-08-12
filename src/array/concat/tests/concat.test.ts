import { concat } from "../concat";

// concat([1], 2, [3], [[4]]);
// => [1, 2, 3, [4]]

// concat([1]);
// => [1]

describe("Array concat", () => {
  it("should return new array concatenating array", () => {
    const array = [1];
    const result = concat(array, 2, [3], [[4]]);

    expect(result).toEqual([1, 2, 3, [4]]);
  });
  it("should return original array", () => {
    const array = [1];
    const result = concat(array);

    expect(result).toEqual([1]);
  });
});
