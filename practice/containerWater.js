//* Given n non-negative integers
//* where each represents a point at coordinate (i, ai)
//* n vertical lines are drawn such that the two endpoints of line i
//* are at (i, ai) and (i, 0)

//* Find two lines that together with the x-axis
//* form a container, such that the container contains the most water

//* You may not slant the container

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

function containerWater(h) {
  let firstIndex = 0;
  let lastIndex = h.length - 1;
  let maxArea = 0;

  while (firstIndex < lastIndex) {
    const y = Math.min(h[firstIndex], h[lastIndex]);
    const x = lastIndex - firstIndex;
    const area = x * y;

    maxArea = area > maxArea ? area : maxArea;

    if (h[firstIndex] < h[lastIndex]) {
      firstIndex++;
    } else {
      lastIndex--;
    }
  }

  return maxArea;
}

const result = containerWater(height);
console.log(result);

// 8 |     █                   █
// 7 |     █                   █       █
// 6 |     █   █               █       █
// 5 |     █   █       █       █       █
// 4 |     █   █       █   █   █       █
// 3 |     █   █       █   █   █   █   █
// 2 |     █   █   █   █   █   █   █   █
// 1 | █   █   █   █   █   █   █   █   █
//   +-------------------------------------
//     0   1   2   3   4   5   6   7   8

// function containerWater(h) {
//   const data = {};
//   let first = 0;
//   let last = h[h.length - 1];
//   let area = 0;
//   let distance = 0;
//   for (let i = 0; i < h.length/2; i++) {
//     first = h[i];
//     lastIndex = h.length - (i + 1);
//     const currentArea = first > last ? last : first;
//     area = currentArea * currentArea > area ? currentArea * currentArea : area;
//     const currentDistance = lastIndex - i;
//     distance = currentDistance > distance ? currentDistance : distance;
//     if (first < last) {
//       first = h[i + 1];
//     } else if (last < first) {
//       last = h[lastIndex];
//     }
//     console.log(first, last, area, distance);
//   }
//   console.log(data);
// }
