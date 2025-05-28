//* Given a string s containing just the characters
//* '(', ')', '{', '}', '[', ']'
//* determine if the input string is valid
//* Input string is valid if
//* Open brackets must be closed by the same type of brackets
//* Open brackets must be closed in the correct order
//* Every closing brackets has a corresponding open bracket of the same type

const s = "(){}[]";
const s1 = "({[]})";
const s2 = "[{()]}";
const s3 = "{}";

const s4 = "[}";
const s5 = "{]}";
const s6 = "(";

const v1 = "()";
const v2 = "{}";
const v3 = "[]";
const v4 = "(){}[]";
const v5 = "({[]})";
const v6 = "[{()}]";
const v7 = "{[()()]}";
const v8 = "((({{{[[[]]]}}})))";
const v9 = "{[(){}([])]}";
const v10 = "()[{}]({[]})";

const i1 = "(";
const i2 = "[}";
const i3 = "{]";
const i4 = "(]";
const i5 = "({[})]";
const i6 = "({)}";
const i7 = "(()";
const i8 = "[(])";
const i9 = "[{(()}";
const i10 = "())(()";

const extremeCase = "([{({[({[({[]}())]})]})}])";

function validParentheses(string) {
  const bracketMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const stringArray = [];
  const stringLength = string.length;

  if (stringLength % 2 !== 0) {
    return "Invalid";
  }

  for (let i = 0; i < string.length; i++) {
    if (bracketMap[string[i]]) {
      stringArray.push(string[i]);
    } else {
      const key = Object.entries(bracketMap).find(
        ([k, v]) => v === string[i]
      )?.[0];
      if (stringArray[stringArray.length - 1] === key) {
        stringArray.pop();
      } else {
        return "Invalid";
      }
    }
  }

  return "Valid";
}

const result = validParentheses(extremeCase);
console.log(result);

// bracketMap: Maps opening to closing brackets.

// stringArray: Used as a stack to track unmatched opening brackets.

// When a closing bracket is found:

// You check if the last item in the stack matches the expected opening bracket.

// If it matches, pop it.

// If not, return "Invalid".

// If the loop completes and the stack is empty, return "Valid".

// This is the correct and efficient approach for the Valid Parentheses problem.
