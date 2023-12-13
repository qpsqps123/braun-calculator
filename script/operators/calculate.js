import { targetDisplayValue } from "../main.js";
import { formatValue } from "../utils/format.js";
import { gd } from "../data/globalData.js";

export function calculate() {
  if (!gd.operator[gd.i] && !gd.flag.calculated) return; // 첫 번째 연산이면서 연산자도 없을 때, 연산 버튼 클릭 시 생기는 에러 처리.

  // 연산 처리
  if (gd.flag.calculated) {
    gd.operandB[gd.i] = gd.operandB[gd.i - 1];
    gd.operator[gd.i] = gd.operator[gd.i - 1];
    gd.operator[gd.i]();
  } else {
    gd.operator[gd.i]();
  }

  // 에러 처리
  if (gd.flag.denominatorError) {
    targetDisplayValue.textContent = "Denominator can't be 0";
    targetDisplayValue.style.fontSize = "16px";
    targetDisplayValue.style.lineHeight = "2";
    gd.flag.denominatorError = false;
  } else if (gd.flag.invalidInputError) {
    targetDisplayValue.textContent = "Invalid Input";
    gd.flag.invalidInputError = false;
  } else {
    targetDisplayValue.textContent = formatValue(
      +gd.resultValue[gd.i].toFixed(8)
    );

    targetDisplayValue.textContent == 0 ? (gd.resultValue[gd.i] = 0) : ""; // 부동소수점 계산 오차의 한계 때문에 계산 값이 정확히 0이 안나와서 루트 계산 시 0인데도 불구하고 값이 나온다. 그래서 추가해준 식.

    gd.operandA[gd.i + 1] = +gd.resultValue[gd.i];

    console.log("정확한 값은: " + gd.resultValue[gd.i]);
  }

  gd.flag.operandA = false;
  gd.flag.operandB = false;
  gd.flag.calculated = true;
  gd.i++;
}
