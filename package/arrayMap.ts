/** @format */

export function arrayMap(array: any[] = [], iteratee: (item?: any, index?: number, array?: any[]) => any): any[] {
  const mapArray = []
  for (let i = 0; i < array.length; i++) {
    mapArray.push(iteratee(array[i], i, array))
  }
  return mapArray
}
