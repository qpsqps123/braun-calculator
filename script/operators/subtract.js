import {
  operandA,
  operandB,
  resultValue,
  operator,
  n,
  flag,
} from "../data/globalData.js";
import { calculate } from "./calculate.js";

export function subtract() {
  flag.subtraction = true;
  if (operandA[n] && operandB[n]) {
    calculate();
    const subtraction = () => {
      resultValue[n] = operandA[n] - operandB[n];
    };
    operator[n] = subtraction;
  } else {
    const subtraction = () => {
      resultValue[n] = operandA[n] - operandB[n];
    };
    operator[n] = subtraction;
  }
}
