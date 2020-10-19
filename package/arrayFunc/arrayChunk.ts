/** @format */

export function arrayChunk(array: any[] = [], size: number): any[] {
  if (size >= array.length) return [array]
  const chunkArray = []
  let count = 0
  while ((count + 1) * size <= array.length) {
    chunkArray.push(array.slice(count * size, ++count * size - 1))
  }
  return chunkArray
}
