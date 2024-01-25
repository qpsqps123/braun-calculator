import { targetDisplayValue } from "../main.js";
import { operandA, operandB, n, flag } from "../data/globalData.js";
import { clear } from "../reset/clear.js";

export function percentage() {
  if (operandB === true) {
    clear();
  } else if (flag.addition || flag.subtraction) {
    flag.addition = false;
    flag.subtraction = false;
    operandB[n] = operandA[n] * (operandB[n] / 100);
    targetDisplayValue.textContent = operandB[n];
  } else if (flag.multiplication || flag.division) {
    flag.multiplication = false;
    flag.division = false;
    operandB[n] = operandB[n] / 100;
    targetDisplayValue.textContent = operandB[n];
  }
}
