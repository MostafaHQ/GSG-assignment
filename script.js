// Task 2
// function Avg(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }
//   const sum = arr.reduce(
//     (accumultor, currentValue) => accumultor + currentValue,
//     0
//   );
//   const avg = sum / arr.length;

//   return avg;
// }

// console.log(Avg([1, 2, 3, 4]));

// Task 3
function removeDublicate(arr) {
  let hashMap = {};
  for (const s of arr) {
    hashMap[s] = (hashMap[s] || 0) + 1;
  }
  const stringSet = new Set();
  for (const key in hashMap) {
    if (hashMap[key] === 1) {
      stringSet.add(key);
    }
  }
  return stringSet;
}

console.log(removeDublicate(["s", "s", "r", "d"]));
