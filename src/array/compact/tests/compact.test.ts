import { compact } from "../compact";

// compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]

describe("Array compact", () => {
  it("should remove all falsey values", () => {
    const result = compact([0, NaN, 1, null, false, 2, "", 3, undefined]);

    expect(result).toEqual([1, 2, 3]);
  });
});
