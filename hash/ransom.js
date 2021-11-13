function checkMagazine(magazine, note) {
  let magazineWords = {}
  for (word of magazine.split(' ')) {
    if (magazineWords[word]) magazineWords[word]++
    else magazineWords[word] = 1
  }
  for (word of note.split(' ')) {
    if (!magazineWords[word]) return console.log('No')
    else magazineWords[word]--
  }
  return console.log('Yes')
}

checkMagazine('give me one grand today night', 'give one grand today')
