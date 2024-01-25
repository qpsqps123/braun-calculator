import {
  operandA,
  operandB,
  resultValue,
  operator,
  n,
  flag,
} from "../data/globalData.js";
import { calculate } from "./calculate.js";

export function add() {
  flag.addition = true;
  if (operandA[n] && operandB[n]) {
    calculate();
    const addition = () => {
      resultValue[n] = operandA[n] + operandB[n];
    };
    operator[n] = addition;
  } else {
    const addition = () => {
      resultValue[n] = operandA[n] + operandB[n];
    };
    operator[n] = addition;
  }
}
