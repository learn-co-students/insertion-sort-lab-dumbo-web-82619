function findMinAndRemove(arr){
  let min = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i]
  }
  arr.splice(arr.indexOf(min), 1)
  return min
}

function insertionSort(arr){
  let sortedArr = []
  while (arr.length > 0) {
    sortedArr.push(findMinAndRemove(arr))
  }
  return sortedArr
}

// example of insertion sort
// example of binary search
// BIG O is n^2
