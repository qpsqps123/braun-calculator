import { targetDisplayValue } from "../main.js";
import { operandA, operandB, operator, n, flag } from "../data/globalData.js";

export function removeLastDigit() {
  if (
    operator[n] &&
    !operandB[n] &&
    !targetDisplayValue.textContent.includes(".")
  ) {
    return;
  } else if (
    targetDisplayValue.textContent === "Denominator can't be 0" ||
    targetDisplayValue.textContent === "Invalid Input"
  ) {
    targetDisplayValue.textContent = "0";
  } else if (targetDisplayValue.textContent.length < 2) {
    targetDisplayValue.textContent = "0";
  } else {
    targetDisplayValue.textContent = targetDisplayValue.textContent.slice(
      0,
      -1
    );
  }

  const currentDisplayValue = +targetDisplayValue.textContent;

  if (!operator[n]) {
    flag.operandA = true;
    operandA[n] = currentDisplayValue;
  } else {
    flag.operandB = true;
    operandB[n] = currentDisplayValue;
  }
}
