let operandA = [0];
let operandB = [0];
let resultValue = [0];
let operator = [];
let n = 0;
let flag = {
  invalidInputError: false,
  // 나누기의 분모로 0을 입력하고 연산했을 때, NaN이 출력되는 에러 처리를 위해 사용한다.
  denominatorError: false,
  // 현재 결과값이 지수 표기법인지 판단한다.
  exponentialForm: false,
  // operandA에 할당하는 중인지 판단한다.
  operandA: false,
  // operandB에 할당하는 중인지 판단한다.
  operandB: false,
  addition: false,
  subtraction: false,
  multiplication: false,
  division: false,
  calculated: false,
};

const increaseCount = () => {
  n++;
};

const clearGlobalData = () => {
  operandA = [0];
  operandB = [0];
  resultValue = [0];
  operator = [];
  n = 0;
  flag = {
    invalidInputError: false,
    denominatorError: false,
    exponentialForm: false,
    operandA: false,
    operandB: false,
    addition: false,
    subtraction: false,
    multiplication: false,
    division: false,
    calculated: false,
  };
};

export {
  operandA,
  operandB,
  resultValue,
  operator,
  n,
  flag,
  increaseCount,
  clearGlobalData,
};
