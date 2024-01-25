import { targetDisplayValue } from "../main.js";
import { operandA, operandB, operator, n, flag } from "../data/globalData.js";

export function initNumber(e) {
  targetDisplayValue.style.fontSize = "30px";
  targetDisplayValue.style.lineHeight = "1.1";
  flag.calculated = false;

  if (e.target.textContent === ".") {
    operator[n] && !operandB[n] ? (targetDisplayValue.textContent = "0.") : "";

    targetDisplayValue.textContent.includes(".")
      ? ""
      : (targetDisplayValue.textContent += ".");
  } else if (
    targetDisplayValue.textContent === "0" ||
    targetDisplayValue.textContent === "Denominator can't be 0" ||
    targetDisplayValue.textContent === "Invalid Input"
  ) {
    targetDisplayValue.textContent = e.target.textContent;
  } else if (!operator[n] && !flag.operandA) {
    targetDisplayValue.textContent = e.target.textContent;
  } else if (operator[n] && !flag.operandB) {
    targetDisplayValue.textContent = e.target.textContent;
  } else {
    targetDisplayValue.textContent.includes(".")
      ? targetDisplayValue.textContent.length > 10
        ? ""
        : (targetDisplayValue.textContent += e.target.textContent)
      : targetDisplayValue.textContent.length > 9
      ? ""
      : (targetDisplayValue.textContent += e.target.textContent);
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
