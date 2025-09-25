function binarySearch(bet1, bet2) {
  let left = 0
  let right = bet1.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (bet1[mid] === bet2) return mid
    if (bet1[mid] < bet2) left = mid + 1
    else right = mid - 1
  }
  return -1
}

const numbers = [1, 3, 5, 7, 9, 11, 15]
const index = binarySearch(numbers, 7)
console.log(index)