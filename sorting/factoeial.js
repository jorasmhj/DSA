function factorial(num) {
  let fact = 1
  for (let i = 1; i <= num; i++) {
    fact *= i
  }
  console.log(fact)
}

factorial(4)

2, 4, 6, 24, 33, 56, 7, 1, 0, 40

2, 4, 6, 24, 33, 56, 7, 1, 0, 40
2, 4, 6, 7, 24, 33, 56, 1, 0, 40
1, 2, 4, 6, 7, 24, 33, 56, 0, 40
0, 1, 2, 4, 6, 7, 24, 33, 56, 40
