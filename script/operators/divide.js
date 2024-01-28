import {
  operandA,
  operandB,
  resultValue,
  operator,
  n,
  flag,
} from "../data/globalData.js";
import { calculate } from "./calculate.js";

export function divide() {
  flag.division = true;
  if (operandA[n] && operandB[n]) {
    calculate();
    const division = () => {
      if (operandB[n] === 0) {
        flag.denominatorError = true;
        operandB[n] = undefined;
      } else {
        resultValue[n] = operandA[n] / operandB[n];
      }
    };
    operator[n] = division;
  } else {
    const division = () => {
      if (operandB[n] === 0) {
        flag.denominatorError = true;
        operandB[n] = undefined;
      } else {
        resultValue[n] = operandA[n] / operandB[n];
      }
    };
    operator[n] = division;
  }
}
