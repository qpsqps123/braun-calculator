import { targetDisplayValue } from "../main.js";
import { formatResultValue, formatDisplayValue } from "../utils/format.js";
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
  if (!operator[n] && !flag.calculated) return; // 첫 번째 연산이면서 연산자도 없을 때, 연산 버튼 클릭 시 생기는 에러 처리.

  // 연산 처리
  if (flag.calculated) {
    operandB[n] = operandB[n - 1];
    operator[n] = operator[n - 1];
    operator[n]();
  } else {
    operator[n]();
  }

  // 에러 처리
  if (flag.denominatorError) {
    targetDisplayValue.textContent = "Denominator can't be 0";
    targetDisplayValue.style.fontSize = "16px";
    targetDisplayValue.style.lineHeight = "2";
    flag.denominatorError = false;
  } else if (flag.invalidInputError) {
    targetDisplayValue.textContent = "Invalid Input";
    flag.invalidInputError = false;
  } else {
    targetDisplayValue.textContent = formatValue(+resultValue[n].toFixed(8));

    // 자바스크립트의 부동소수점 계산 오차 한계 때문에 (자바스크립트는 배정밀도 64비트 부동소수점 형식으로 표현한다.)
    // 계산 값이 정확히 0 혹은 1이 안나와서 루트 계산 시 표시 텍스트가 0 혹은 1인데도 실제 값은 아주 작은 소수점 값이
    // 붙어서 나온다.
    // 이 에러 핸들링을 위해 추가해준 식.
    targetDisplayValue.textContent == 0 ? (resultValue[n] = 0) : "";
    targetDisplayValue.textContent == 1 ? (resultValue[n] = 1) : "";

    operandA[n + 1] = resultValue[n];

    console.log("정확한 값은: " + resultValue[n]);
  }

  flag.operandA = false;
  flag.operandB = false;
  flag.calculated = true;
  increaseCount();
}
