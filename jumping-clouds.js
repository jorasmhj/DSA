function jumpingOnClouds(c) {
  let totalJumps = 0
  let currentPlace = 0
  let lastCloudIndex = c.length - 1
  for (let i = 0; i < c.length; i++) {
    if (c[i] == 1 || i < currentPlace || i == lastCloudIndex) continue
    if (currentPlace + 2 > lastCloudIndex && currentPlace + 1 == 0) {
      totalJumps++
      currentPlace++
      continue
    }
    currentPlace = c[currentPlace + 2] == 0 ? currentPlace + 2 : currentPlace + 1
    totalJumps++
  }
  return totalJumps
}

console.log(jumpingOnClouds([0, 1, 1, 0, 1, 0, 0, 0, 1]))

//[0,0,1,0,1,0,0,0]

2 > 3
3 > 3
