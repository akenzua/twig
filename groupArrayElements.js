/**
 * This repository contain a function and corresponding test file that: * Given an array of length >= 0, and a positive *integer N, return the *  contents of the array divided into N
 * equally sized arrays.
 *
 * @param { Array<any> } array - Array of items to group into sub arrays
 * @param { number } size - number of sub arrays to return
 * @returns { Array<Array<any>> } groupedArray
 */
function groupArrayElements(array, size) {
  /**
   * returns 2 dimensional array or empty array
   */
  const groupedArray = [];
  /**
   * index of the next sub array
   */
  /** @type { number } */
  let index = 0;
  /**
   * maximum length of sub arrays
   */
  /** @type { number } */
  const subArrayLength = Math.ceil(array.length / size);

  if (array.length === 0) {
    return [];
  }

  if (size > array.length) {
    throw "number of groups cannot be greater than array length";
  }

  while (index < array.length) {
    groupedArray.push(array.slice(index, index + subArrayLength));
    index += subArrayLength;
  }

  if (groupedArray.length < size) {
    throw `the combination of arguments cannot produce ${size} of equal length or with last sub array length equals to the remainder`;
  }

  return groupedArray;
}

module.exports = groupArrayElements;
