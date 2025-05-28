//* Given a string s
//* Find the length of the longest substring without repeating characters

const s = "abcabcbb";
const s1 = "bbbbb";
const s2 = "pwwkew";
const s3 = "zaqfrikoplmnbwex";

function longestSubstring1(string) {
  const stringArray = [];
  const substringArray = [];

  for (let i = 0; i < string.length; i++) {
    if (stringArray.find((x) => x === string[i])) {
      substringArray.push(stringArray.join(""));
      const index = stringArray.indexOf(string[i]);
      if (index !== -1) {
        stringArray.splice(index, 1);
      }
      stringArray.push(string[i]);
    } else {
      stringArray.push(string[i]);
    }

    if (i === string.length - 1) {
      substringArray.push(stringArray.join(""));
    }
  }

  const longest = substringArray.reduce((a, b) =>
    b.length > a.length ? b : a
  );

  return `The answer is ${longest}, with the length of ${longest.length}`;
}

const result1 = longestSubstring1(s3);
console.log(result1);

//  It's not optimal in terms of performance (because of splice, join, includes, etc., which are not constant time).

//* Optimal Answer
function longestSubstring(s) {
  let charSet = new Set();
  let left = 0;
  let maxLength = 0;
  let longest = "";

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);

    if (right - left + 1 > maxLength) {
      maxLength = right - left + 1;
      longest = s.slice(left, right + 1);
    }
  }

  return `The answer is ${longest}, with the length of ${maxLength}`;
}

const result = longestSubstring(s3);
console.log(result);
