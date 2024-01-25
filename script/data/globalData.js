let operandA = [0];
let operandB = [0];
let resultValue = [0];
let operator = [];
let n = 0;
let flag = {
  invalidInputError: false,
  denominatorError: false,
  operandA: false,
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
