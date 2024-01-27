/**
 * 현재 계산 결과 값이 계산 가능 범위를 초과했는지 판단합니다.
 * @param {number} value 현재 계산 결과 값을 인자로 받습니다.
 * @returns {number | string} 현재 계산 결과 값이 계산 가능 범위를 초과하면, 문자열 Out of range를 반환합니다.
 */
export function validateResultValueRange(value) {
  if (value === 0) {
    return 0;
  } else if (value > 0 && value < 2.23e-308) {
    value = "Out of range";
    return value;
  } else if (value < 0 && value > -2.23e-308) {
    value = "Out of range";
    return value;
  } else if (value < -1.7e308) {
    value = "Out of range";
    return value;
  } else if (value > 1.7e308) {
    value = "Out of range";
    return value;
  }
}
