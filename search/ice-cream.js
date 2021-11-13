function whatFlavours(costs, money) {
  let complements = {}
  for (let i = 0; i < costs.length; i++) {
    const cost = costs[i]
    if (cost >= money) continue

    let complement = money - cost
    if (complements[cost]) {
      let costIndex = i + 1
      let complementIndex = complements[cost]
      return console.log(`${Math.min(costIndex, complementIndex)} ${Math.max(costIndex, complementIndex)}`)
    } else complements[complement] = i + 1
  }
}

whatFlavours([1, 2, 3, 4, 5, 6], 6)

// 6
// 1 2 3 4 5 6

// a={
//   5: 1,
//   4: 2,
//   3: 3,
// }
