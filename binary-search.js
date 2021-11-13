function recursiveBinarySearch(arr, x, start, end) {
  // Base Condition
  if (start > end) return false
  // Find the middle index
  let mid = Math.floor((start + end) / 2)

  // Compare mid with given key x
  if (arr[mid] === x) return true

  // If element at mid is greater than x,
  // search in the left half of mid
  if (arr[mid] > x) return recursiveBinarySearch(arr, x, start, mid - 1)
  // If element at mid is smaller than x,
  // search in the right half of mid
  else return recursiveBinarySearch(arr, x, mid + 1, end)
}

let iterativeBinarySearch = function (arr, x) {
  let start = 0,
    end = arr.length - 1
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)

    // If element is present at mid, return True
    if (arr[mid] === x) return true
    // Else look in left or right half accordingly
    else if (arr[mid] < x) start = mid + 1
    else end = mid - 1
  }

  return false
}
