function countingValleys(steps, path) {
  let currentAltitude = 0
  let valleyCount = 0
  for (const step of path.split('')) {
    const prevAlitude = currentAltitude
    step == 'D' ? currentAltitude-- : currentAltitude++
    if (prevAlitude < 0 && currentAltitude == 0) valleyCount++
  }
  return valleyCount
}

console.log(countingValleys(8, 'UDDDUDUU'))
