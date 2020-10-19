/** @format */
export function arrayChunk(array = [], size) {
  if (size >= array.length) return [array.slice()]
  const chunkArray = []
  let count = 0
  while ((count + 1) * size <= array.length) {
    chunkArray.push(array.slice(count * size, ++count * size - 1))
  }
  return chunkArray
}
