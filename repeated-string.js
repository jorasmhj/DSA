function repeatedString(s, n) {
  const completeStringCount = Math.floor(n / s.length) * s.length
  const offset = n - completeStringCount
  let totalCount = 0
  const aCount = s.split('').reduce((total, word, i) => {
    if (word == 'a') {
      total++
      if (i < offset) totalCount++
    }
    return total
  }, 0)
  totalCount += aCount * Math.floor(n / s.length)
  return totalCount
}

// console.log(repeatedString('abba', 10))
