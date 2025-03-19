function test(s) {
    const stack = [];
    const brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (brackets[char]) {
            const topElement = stack.length === 0 ? '#' : stack.pop();
            if (topElement !== brackets[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

  
  return stack.length === 0;
}
