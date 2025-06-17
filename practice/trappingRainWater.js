//* Given an array of non-negative integers, height
//* Each element represents the height of a bar at that position
//* Bars form walls that can trap rainwater
//* Compute how much water it can trap after raining

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

function trappingRainWater(h) {
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

const result = trappingRainWater(height);
console.log(result);

// 3 |                             █
// 2 |             █               █   █       █
// 1 |     █       █   █       █   █   █   █   █  █
//   +------------------------------------------------
//     0   1   2   3   4   5   6   7   8   9   0   1
