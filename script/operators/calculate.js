import { targetDisplayValue } from "../main.js";
import { setResultValueFormat, setDisplayFormat } from "../utils/format.js";
import { validateResultValueRange } from "../utils/validate.js";
import {
  operandA,
  operandB,
  resultValue,
  operator,
  n,
  flag,
  increaseCount,
} from "../data/globalData.js";
import { clear } from "../reset/clear.js";

export function calculate() {
  if (!operator[n] && !flag.calculated) return;

  // 연산 처리
  if (flag.calculated) {
    operandB[n] = operandB[n - 1];
    operator[n] = operator[n - 1];
    operator[n]();
  } else {
    operator[n]();
  }

  // 오류 처리
  if (
    isNaN(resultValue[n]) &&
    flag.denominatorError === false &&
    flag.invalidInputError === false
  ) {
    clear();
    return;
  } else if (flag.denominatorError) {
    targetDisplayValue.textContent = "Denominator can't be 0";
    targetDisplayValue.style.fontSize = "16px";
    targetDisplayValue.style.lineHeight = "2";
    flag.denominatorError = false;
  } else if (flag.invalidInputError) {
    targetDisplayValue.textContent = "Invalid input";
    targetDisplayValue.style.fontSize = "22px";
    flag.invalidInputError = false;
  } else if (validateResultValueRange(resultValue[n]) === "Out of range") {
    resultValue[n] = validateResultValueRange(resultValue[n]);
    targetDisplayValue.textContent = setDisplayFormat(resultValue[n]);
    targetDisplayValue.style.fontSize = "24px";
    targetDisplayValue.style.lineHeight = "1.3";
  } else {
    resultValue[n] = setResultValueFormat(resultValue[n]);
    targetDisplayValue.textContent = setDisplayFormat(resultValue[n]);

    operandA[n + 1] = resultValue[n];

    console.log("보다 정확한 값은: " + resultValue[n]);
  }

  flag.operandA = false;
  flag.operandB = false;
  flag.calculated = true;
  increaseCount();
}
