/** @format */
import { arrayEach } from "./arrayEach"

export function arrayDifference(array: any[], ...args: any[][]) {
  const countMap = new Map()
  const newArray = []
  arrayEach(array, value => {
    countMap.set(value, 1)
  })
  arrayEach(args, value => {
    const count = countMap.get(value)
    if (count && count < 2) {
      countMap.set(value, 2)
    }
  })
  arrayEach(array, value => {
    if (countMap.get(value) > 1) {
      newArray.push(value)
    }
  })
}
