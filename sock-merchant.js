function sockMerchant(n, ar) {
  let singleSock = {}
  return ar.reduce((totalPairs, val) => {
    if (singleSock[val]) {
      delete singleSock[val]
      totalPairs++
    } else singleSock[val] = true
    return totalPairs
  }, 0)
}

console.log(sockMerchant(5, [1, 3, 1, 2, 3, 3, 3]))
