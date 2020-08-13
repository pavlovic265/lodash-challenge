import { difference } from "../difference";

// difference([2, 1], [2, 3]);
// // => [1]

describe("Array difference", () => {
  it("should return new array without items from second one", () => {
    const result = difference([2, 1, NaN], [2, 3]);

    expect(result).toEqual([1, NaN]);
  });
});
