const groupArrayElements = require("./groupArrayElements");

describe("group array element test", () => {
  test("should return empty array if empty array provided", () => {
    const numberOfSubArrays = 3;

    const newArray = groupArrayElements([], numberOfSubArrays);
    expect(newArray.length).toBe(0);
  });

  test("should return [[1, 2], [3, 4], [5]]", () => {
    const numberOfSubArrays = 3;

    const expected = [[1, 2], [3, 4], [5]];

    const newArray = groupArrayElements([1, 2, 3, 4, 5], numberOfSubArrays);
    expect(newArray.length).toBe(3);
    expect(JSON.stringify(expected) === JSON.stringify(newArray));
  });

  test("should throw error if number of groups is greater than array length", () => {
    const numberOfSubArrays = 3;
    const expectedError = `number of groups cannot be greater than array length`;

    expect(() => {
      groupArrayElements([1], numberOfSubArrays);
    }).toThrow(expectedError);
  });

  test("should throw an error if it cannot return specified number of sub arrays ", () => {
    const numberOfSubArrays = 4;

    const expectedError = `the combination of arguments cannot produce ${numberOfSubArrays} of equal length or with last sub array length equals to the remainder`;

    expect(() => {
      groupArrayElements([1, 2, 3, 4, 5], numberOfSubArrays);
    }).toThrow(expectedError);
  });
});
