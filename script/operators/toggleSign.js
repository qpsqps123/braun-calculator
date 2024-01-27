import { targetDisplayValue } from "../main.js";
import { operandA, operandB, operator, n } from "../data/globalData.js";

export function toggleSign() {
  if (!operator[n] && operandA[n]) {
    operandA[n] = operandA[n] * -1;
    targetDisplayValue.textContent = operandA[n];
  } else if (operator[n] && operandB[n]) {
    operandB[n] = operandB[n] * -1;
    targetDisplayValue.textContent = operandB[n];
  }
}
