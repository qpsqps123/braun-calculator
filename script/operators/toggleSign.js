import { targetDisplayValue } from "../main.js";
import { operandA, operandB, operator, n, flag } from "../data/globalData.js";

export function toggleSign() {
  if (!operator[n] && flag.operandA) {
    operandA[n] = operandA[n] * -1;
    targetDisplayValue.textContent = operandA[n];
  } else if (operator[n] && flag.operandB) {
    operandB[n] = operandB[n] * -1;
    targetDisplayValue.textContent = operandB[n];
  }
}
