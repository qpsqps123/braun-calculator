import { targetDisplayValue } from "../main.js";
import { operandA, operandB, operator, n, flag } from "../data/globalData.js";

export function initNumber(e) {
  // operandA부터 입력하는 상황이든(계산을 처음 시작하는)
  // operandB부터 입력하는 상황이든(연속 사칙연산 자동 연산하는)
  // calculate 함수를 연속으로 입력하는 상황 외에
  // calculate 함수가 호출되기 이전에는 반드시 initNumber 함수가 호출되어야 하기 때문에
  // flag.calculated = false를 이곳에 넣어준다.
  targetDisplayValue.style.fontSize = "30px";
  targetDisplayValue.style.lineHeight = "1.1";
  flag.calculated = false;

  if (e.target.textContent === ".") {
    operator[n] && !operandB[n] ? (targetDisplayValue.textContent = "0.") : "";

    targetDisplayValue.textContent.includes(".")
      ? ""
      : (targetDisplayValue.textContent += ".");
  } else if (
    // 맨 처음 숫자를 할당할 때의 조건.
    // 초기 targetDisplayValue.textContent 값 0은 문자열이다.
    targetDisplayValue.textContent === "0" ||
    // 나누기의 분모로 0을 입력하고 연산했을 때, 생기는 에러를 처리하고 뜨게 한 표시 문구.
    // 처음 숫자를 할당하는 상태로 돌아가기 위한 조건이다(순번이 clear되는 것은 아니다).
    targetDisplayValue.textContent === "Denominator can't be 0" ||
    targetDisplayValue.textContent === "Invalid Input"
  ) {
    targetDisplayValue.textContent = e.target.textContent;
  } else if (!operator[n] && !flag.operandA) {
    // operator ==== false 조건을 걸지 않으면, 연속 사칙연산 자동 연산 시 operandB 입력할 때
    // flag.operandA = false가 되어 있기 때문에 여기서 계속 걸린다.
    targetDisplayValue.textContent = e.target.textContent;
  } else if (operator[n] && !flag.operandB) {
    targetDisplayValue.textContent = e.target.textContent;
  } else {
    targetDisplayValue.textContent.length > 9
      ? ""
      : (targetDisplayValue.textContent += e.target.textContent);
  }

  const currentDisplayValue = +targetDisplayValue.textContent;

  if (!operator[n]) {
    // flag.operandA 값이 true가 되기 전 처음 한 번은 false다.
    // 그러므로 위의 else if 조건에 최초 한 번이 걸린다.
    flag.operandA = true;
    operandA[n] = currentDisplayValue;
  } else {
    flag.operandB = true;
    operandB[n] = currentDisplayValue;
  }
}
