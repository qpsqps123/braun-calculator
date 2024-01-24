/**
 * 배정밀도 부동소수점 방식의 상대 반올림 오차 문제를 해결합니다.
 * 인자 값이 일반 표기법이면 유효숫자 16번째 자리에서 반올림합니다.
 * 인자 값이 지수 표기법이면 가수부 소수점 15번째 자리에서 반올림합니다.
 * @param {number} value 현재 계산 결과 값을 인자로 받습니다.
 * @returns {number} 반올림된 값을 반환합니다.
 */
export function setResultValueFormat(value) {
  const stringValue = String(value);

  let formmatedValue;

  if (stringValue.includes("e")) {
    formmatedValue = parseFloat(value.toExponential(14));
    return formmatedValue;
  } else {
    formmatedValue = parseFloat(value.toPrecision(15));
    return formmatedValue;
  }
}

/**
 * 현재 계산 결과 값을 받아 계산기 디스플레이에 표시하기 위한 형식으로 변환합니다.
 * @param {number} value 현재 계산 결과 값을 인자로 받습니다.
 * @returns {number | string} 현재 계산 결과 값의 유효숫자가 10개를 초과하면, 지수 표기법으로 변경하며 가수의 소수점 아래 5자리에서 반올림하여 반환합니다. 초과하지 않으면 값 그대로 반환합니다.
 */
export function setDisplayFormat(value) {
  if (value === "Out of range") {
    return value;
  }

  const displayOverflow = String(value).includes(".")
    ? String(value).length > 11
    : String(value).length > 10;

  if (displayOverflow) {
    const exponentialForm = parseFloat(value).toExponential(4);
    return exponentialForm;
  } else {
    return value;
  }
}
