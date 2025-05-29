//* Given an array of integers and an integer target.
//* Return the indices of the 2 numbers such that they add up to the target.
//* You may assume that each input would have exactly one solution,
//* and you may not use the same element twice.
//* You can return the answer in any order.

// array: num = [2, 7, 11, 15]
// target: num = 9

// Index 0 = 2, Index 1 = 7
// array[0] + array[1] = 2 + 7 = 9

// function twoSum(array, target) {
//   const map = new Map();

//   for (let i = 0; i < array.length; i++) {
//     const complement = target - array[i];
//     if (map.has(complement)) {
//         console.log(complement);
//         console.log(map.get(complement));
//       return [map.get(complement), i];
//     }
//     map.set(array[i], i);
//   }
// }

// const numbers = [1, 5, 2, 15, 8, 7];
// const target = 9;
// const result = twoSum(numbers, target);
// console.log(result);

//* i = 0   9 - 1 = 8       → 8 not in map → store (1 → 0)
//* i = 1   9 - 5 = 4       → 4 not in map → store (5 → 1)
//* i = 2   9 - 2 = 7       → 7 not in map → store (2 → 2)
//* i = 3   9 - 15 = -6     → -6 not in map → store (15 → 3)
//* i = 4   9 - 8 = 1       → 1 is in map (from i=0) → return [0, 4]

const nums = [2, 11, 15, 7];
const target = 9;

function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const x = target - nums[i];
    if (map.has(x)) {
      return [map.get(x), i];
    } else {
      map.set(nums[i], i);
    }
  }
}

const result = twoSum(nums, target);
console.log(result);
