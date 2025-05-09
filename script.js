const numberButtons  = document.querySelectorAll('.numbers button, .numbers_two button');
const operatorButtons = document.querySelectorAll('.operators button');
const clearButton    = document.getElementById('clear');
const equalsButton   = document.getElementById('equals');
const resultBox      = document.getElementById('result_box');


const inputs = [...numberButtons, ...operatorButtons];

inputs.forEach(btn =>
  btn.addEventListener('click', () => {
    resultBox.value += btn.textContent;
  })
);

clearButton.addEventListener('click', () => {
  resultBox.value = '';
});

equalsButton.addEventListener('click', () => {
  resultBox.value = evaluateExpression(resultBox.value);
});

function evaluateExpression(expr) {
  const tokens = expr.match(/\d+\.?\d*|[+\-*/]/g);
  if (!tokens) return '';

  let acc = parseFloat(tokens[0]);
  for (let i = 1; i < tokens.length; i += 2) {
    acc = calculate(acc, parseFloat(tokens[i+1]), tokens[i]);
  }
  return acc;
}

const calculate = (a, b, op) => {
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b === 0 ? 'Error' : a / b;
    default:  return NaN;
  }
};


equalsButton.addEventListener('click', () => {
resultBox.value = evaluateExpression()
})

equalsButton.addEventListener('click', () => {
  resultBox.value
})