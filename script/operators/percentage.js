import { targetDisplayValue } from "../main.js";
import { operandA, operandB, n, flag } from "../data/globalData.js";
import { clear } from "../reset/clear.js";

export function percentage() {
  // operandB를 할당하는 동안에 true로 되어있다. 즉, operandA까지만 할당되어 있는 구간이다.
  // 여기 if 조건 operandB 체크 필요
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
