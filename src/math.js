export function add(a, b) {
  return Number(a) + Number(b);
}

export function subtract(a, b) {
  return a - b;
}

export function divide(a, b) {
  return a / b;
}

export function calculate(operation, a, b) {
  if (operation === "add") return add(a, b);
  if (operation === "subtract") return subtract(a, b);
  if (operation === "divide") return divide(a, b);
  return 0;
}
