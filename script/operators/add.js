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
  // 현재 순번 n에서 opearndA와 operandB가 모두 할당 되어있을 때,
  // operator 핸들러 함수가 호출 되면,
  // calculate 함수가 실행된다.
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
