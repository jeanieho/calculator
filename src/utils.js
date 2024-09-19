const precedence = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
};
  
const isOperator = (token) => ["+", "-", "*", "/"].includes(token);
  
  // Shunting Yard Algorithm to convert infix to postfix
  export const shuntingYard = (input) => {
    const output = [];
    const operators = [];
  
    const tokens = input.match(/\d+(\.\d+)?|[+\-*/()]/g);
    tokens.forEach((token) => {
      if (!isNaN(token)) {
        output.push(token);
      } else if (isOperator(token)) {
        while (
          operators.length &&
          isOperator(operators[operators.length - 1]) &&
          precedence[operators[operators.length - 1]] >= precedence[token]
        ) {
          output.push(operators.pop());
        }
        operators.push(token);
      } else if (token === "(") {
        operators.push(token);
      } else if (token === ")") {
        while (operators.length && operators[operators.length - 1] !== "(") {
          output.push(operators.pop());
        }
        operators.pop();
      }
    });
  
    while (operators.length) {
      output.push(operators.pop());
    }
  
    return output;
  };
  
  export const evaluatePostfix = (postfix) => {
    const stack = [];
  
    postfix.forEach((token) => {
      if (!isNaN(token)) {
        stack.push(parseFloat(token));
      } else if (isOperator(token)) {
        const b = stack.pop();
        const a = stack.pop();
        switch (token) {
          case "+":
            stack.push(a + b);
            break;
          case "-":
            stack.push(a - b);
            break;
          case "*":
            stack.push(a * b);
            break;
          case "/":
            stack.push(a / b);
            break;
          default:
            break;
        }
      }
    });
  
    return stack[0];
  };
  