/** @format */

import { arrayEach } from "../build/bundle"

test("数组每个值+1", () => {
  const testArray = [1, 2, 3]
  arrayEach(testArray, addOne)
  expect(testArray).toEqual([2, 3, 4])
})

function addOne(item, index, array) {
  array[index]++
}
