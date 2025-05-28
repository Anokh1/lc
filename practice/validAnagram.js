//* Given two string s and t
//* Write a function to determine if t is an anagram of s

const s = "anagram";
const t = "nagaram";
const s1 = "rat";
const t1 = "car";

function validAnagram(s, t) {
  const frequency = {};
  if (s.length === t.length) {
    for (let i = 0; i < s.length; i++) {
      if (!frequency[s[i]]) {
        frequency[s[i]] = 1;
      } else {
        frequency[s[i]] += 1;
      }
    }

    for (let j = 0; j < t.length; j++) {
      if (!frequency[t[j]]) {
        return false;
      } else {
        frequency[t[j]] -= 1;
      }
    }

    console.log(frequency);

    return true;
  } else {
    return false;
  }
}

const result = validAnagram(s1, t1);
console.log(result);

// Time: O(n), where n is the length of the strings.

// Space: O(1) (since the character set is fixed, e.g., lowercase English letters).
