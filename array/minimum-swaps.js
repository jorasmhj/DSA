function minimumSwaps(arr) {
  let swaps = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == i + 1) continue
    let value = arr[i]
    arr[i] = arr[value - 1]
    arr[value - 1] = value
    swaps++
    i--
  }
  return swaps
}

console.log(minimumSwaps([3, 1, 2, 7, 4, 5, 6]))
