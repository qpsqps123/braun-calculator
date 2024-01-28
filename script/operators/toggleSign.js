import { targetDisplayValue } from "../main.js";
import { operandA, operandB, operator, n } from "../data/globalData.js";
import { setDisplayFormat } from "../utils/format.js";

export function toggleSign() {
  if (!operator[n] && operandA[n]) {
    operandA[n] = operandA[n] * -1;
    targetDisplayValue.textContent = setDisplayFormat(operandA[n]);
  } else if (operator[n] && operandB[n]) {
    operandB[n] = operandB[n] * -1;
    targetDisplayValue.textContent = setDisplayFormat(operandB[n]);
  }
}
