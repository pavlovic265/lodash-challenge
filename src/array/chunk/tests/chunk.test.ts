import { chunk } from "../chunk";

// console.log("chunk", chunk(["a", "b", "c", "d"], 2));
// // => [['a', 'b'], ['c', 'd']]

// console.log("chunk", chunk(["a", "b", "c", "d"], 3));
// // => [['a', 'b', 'c'], ['d']])

describe("Array chunk", () => {
  it("should split array in 2 chunks", () => {
    const result = chunk(["a", "b", "c", "d"], 2);

    expect(result).toEqual([
      ["a", "b"],
      ["c", "d"],
    ]);
  });
  it("should split array in item of 3 and 1 chunks", () => {
    const result = chunk(["a", "b", "c", "d"], 3);

    expect(result).toEqual([["a", "b", "c"], ["d"]]);
  });
});
