// function minimumBribes(q) {
//   const totalPeople = q.length
//   let totalBribes = 0
//   for (let i = 1; i <= totalPeople; i++) {
//     if (i < q[i - 1]) {
//       let totalPersonsBribed = q[i - 1] - i
//       if (totalPersonsBribed > 2) console.log('Too chaotic')
//       totalBribes += totalPersonsBribed
//     } else if (q[i - 1] > q[i]) totalBribes++
//   }
//   console.log(totalBribes)
// }

function minimumBribes(q) {
  let swap = 0
  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] != i + 1) {
      if (q[i - 1] == i + 1) {
        swap += 1
        let temp = q[i - 1]
        q[i - 1] = q[i]
        q[i] = temp
      } else if (q[i - 2] == i + 1) {
        swap += 2
        let temp = q[i - 2]
        q[i - 2] = q[i - 1]
        q[i - 1] = q[i]
        q[i] = temp
      } else {
        console.log('Too chaotic')
        return
      }
    }
  }
  console.log(swap)
}

// minimumBribes([2, 1, 5, 3, 4])

function maximumToys(prices, k) {
  prices = prices.sort((a, b) => a - b)
  let totalPrice = 0
  for (let i = 0; i < prices.length; i++) {
    if (totalPrice + prices[i] < k) {
      totalPrice += prices[i]
    } else return i
  }
}

console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50))
