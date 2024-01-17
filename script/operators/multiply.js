import {
  operandA,
  operandB,
  resultValue,
  operator,
  n,
  flag,
} from "../data/globalData.js";
import { calculate } from "./calculate.js";

export function multiply() {
  flag.multiplication = true;
  if (operandA[n] && operandB[n]) {
    calculate();
    const multiplication = () => {
      resultValue[n] = operandA[n] * operandB[n];
    };
    operator[n] = multiplication;
  } else {
    const multiplication = () => {
      resultValue[n] = operandA[n] * operandB[n];
    };
    operator[n] = multiplication;
  }
}
