function getMedianx2(countArr, days) {
  let sum = 0
  for (let i = 0; i < countArr.length; i++) {
    sum += countArr[i]
    if (sum * 2 === days) return i * 2 + 1
    if (sum * 2 > days) return i * 2
  }
}
function activityNotifications(expenditure, d) {
  const countArr = new Array(201).fill(0)
  let notices = 0
  for (let i = 0; i < d; i++) {
    countArr[expenditure[i]]++
  }
  for (let i = d; i < expenditure.length; i++) {
    const medianx2 = getMedianx2(countArr, d)
    if (expenditure[i] >= medianx2) notices++
    if (i === expenditure.length - 1) break
    countArr[expenditure[i - d]]--
    countArr[expenditure[i]]++
  }
  return notices
}

console.log(activityNotifications([1, 2, 3, 4, 4], 4))
