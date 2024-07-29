const input1 = [3, 2, 1, 13, 8, 5, 0, 1];
const input2 = [100, 89, 234, 576, 87];

function mergeSort(array, low, high) {
  if (low === high) {
    let base = [];
    base[0] = array[low];
    return base;
  }
  let mid = Math.floor((low + high) / 2);
  let left = mergeSort(array, low, mid);
  let right = mergeSort(array, mid + 1, high);
  let merged = merge(left, right);
  return merged;
}

function merge(L, R) {
  let merged = [];

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < L.length && j < R.length) {
    if (L[i] <= R[j]) {
      merged[k] = L[i];
      i++;
      k++;
    }
    if (R[j] < L[i]) {
      merged[k] = R[j];
      j++;
      k++;
    }
  }

  if (i === L.length) {
    while (j < R.length) {
      merged[k] = R[j];
      j++;
      k++;
    }
  }

  if (j === R.length) {
    while (i < L.length) {
      merged[k] = L[i];
      i++;
      k++;
    }
  }

  return merged;
}

console.log(`Merge sort ${input1}: `, mergeSort(input1, 0, input1.length - 1));
console.log(`Merge sort ${input2}: `, mergeSort(input2, 0, input2.length - 1));
