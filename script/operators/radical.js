import {
  operandA,
  resultValue,
  operator,
  n,
  flag,
} from "../data/globalData.js";
import { calculate } from "./calculate.js";

export function radical() {
  if (flag.calculated) {
    const squareRoot = () => {
      if (operandA[n] < 0) {
        flag.invalidInputError = true;
      } else {
        resultValue[n] = Math.sqrt(operandA[n]);
      }
    };
    operator[n - 1] = squareRoot;
    calculate();
  } else {
    const squareRoot = () => {
      if (operandA[n] < 0) {
        flag.invalidInputError = true;
      } else {
        resultValue[n] = Math.sqrt(operandA[n]);
      }
    };
    operator[n] = squareRoot;
    calculate();
  }
}
