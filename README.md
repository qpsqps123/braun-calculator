# Braun Calculator

Braun Calculator 프로젝트는 제가 좋아하는 브라운 사의 계산기를 웹으로 옮겨본 프로젝트입니다.

본 문서에서는 이 계산기의 <a href="https://github.com/qpsqps123/braun-calculator?tab=readme-ov-file#%EC%82%AC%EC%9A%A9-%EB%B0%A9%EB%B2%95">사용 방법</a>, <a href="https://github.com/qpsqps123/braun-calculator?tab=readme-ov-file#%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5">주요 기능</a>, <a href="https://github.com/qpsqps123/braun-calculator?tab=readme-ov-file#%EC%98%88%EC%99%B8-%EC%B2%98%EB%A6%AC">예외 처리</a>, <a href="https://github.com/qpsqps123/braun-calculator?tab=readme-ov-file#%EB%B2%94%EC%9C%84-&-%ED%98%95%EC%8B%9D">범위 & 형식</a>을 소개합니다.

배포 주소는 https://qpsqps123.github.io/braun-calculator/ 입니다.

## 사용 방법

계산기는 마우스 또는 키보드를 사용하여 조작할 수 있습니다.
키보드 단축키는 도움말을 통해 확인하실 수 있습니다.

![Description of using the calculator with a mouse](./images/readme/braun-calculator-readme-mouse-click-method.gif)

![Description of toggling the help modal](./images/readme/braun-calculator-readme-help.gif)

![Keyboard shortcut of the calculator](./images/readme/braun-calculator-readme-shortcut.png)

## 주요 기능

### 사칙연산

![Description of the addition operation](./images/readme/braun-calculator-readme-add.gif)

![Description of the subtraction operation](./images/readme/braun-calculator-readme-subtract.gif)

![Description of the multiplication operation](./images/readme/braun-calculator-readme-multiply.gif)

![Description of the division operation](./images/readme/braun-calculator-readme-divide.gif)

### 부호 변환

![Description of the toggle sign operation](./images/readme/braun-calculator-readme-toggle-sign.gif)

### 제곱근 연산

![Description of the radical operation](./images/readme/braun-calculator-readme-radical.gif)

### 퍼센트 연산

![Description of the add percentage operation](./images/readme/braun-calculator-readme-percentage-add.gif)

![Description of the subtract percentage operation](./images/readme/braun-calculator-readme-percentage-subtract.gif)

![Description of the multiply percentage operation](./images/readme/braun-calculator-readme-percentage-multiply.gif)

![Description of the divide percentage operation](./images/readme/braun-calculator-readme-percentage-divide.gif)

### 초기화

![Description of the clear operation](./images/readme/braun-calculator-readme-clear.gif)

### 마지막 입력 값 삭제

키보드 Backspace 키로 사용 가능하며, 마우스 사용은 지원하지 않습니다.

![Description of the remove last digit operation](./images/readme/braun-calculator-readme-remove-last-digit.gif)

### 연속 계산

![Description of the continuous calculation](./images/readme/braun-calculator-readme-continuous-calculation.gif)

## 예외 처리

### 분모가 0인 나누기 연산

나누기 연산에서 분모 값이 0이면, 분모는 0이 될 수 없다는 문구가 표시됩니다.

![Description of the divide by zero exception handling](./images/readme/braun-calculator-readme-denominator-error.gif)

### 음수 제곱근 연산

음수를 제곱근 연산하면, 유효하지 않은 값이라는 문구가 표시됩니다.

![Description of the square root of a negative number exception handling](./images/readme/braun-calculator-readme-invalid-input-error.gif)

## 범위 & 형식

### 계산 가능 범위

계산 가능 범위는 다음과 같습니다.

- -1.7e308 < 값 < 1.7e308
- 0 < 값 < 2.23e-308
- -2.23e-308 < 값 < 0

해당 범위를 초과하면 범위 초과 문구가 표시됩니다.

![Description of the significant digits and display format](./images/readme/braun-calculator-readme-out-of-range.png)

### 계산 안정성과 디스플레이 표시 형식

자바스크립트는 IEEE754 표준의 <a href="https://en.wikipedia.org/wiki/Double-precision_floating-point_format" target="_blank" rel="noopener noreferrer">배정밀도 부동소수점 형식</a>을 따릅니다. 따라서, 십진수 문자열 - IEEE754 배정밀도 부동소수점 형식 - 십진수 문자열 변환 과정을 거쳤을 때, 십진수 문자열 유효숫자 최대 15개까지 기존 값과 변환된 값의 동등성이 보장됩니다.
그러므로, 이 계산기는 다음 기준으로 계산 값의 안정성을 보장합니다.

- 일반 표기법은 유효숫자 16번째에서 반올림.
- 지수 표기법은 가수부 소수점 아래 15자릿수에서 반올림.

때문에, 0.1 + 0.2 - 0.3의 결과 값이 5.551115123125783e-17이 아닌 0이 됩니다.

![proving test of '0.1 plus 0.2 subtract 0.3 is 0'](./images/readme/braun-calculator-readme-sig-dig-conversion-test.gif)

계산 값은 계산기 디스플레이에 다음 기준에 따라 표시됩니다.

- 일반 표기법은 유효숫자 10번째까지 표시.
- 지수 표기법은 가수부 소수점 아래 4번째 자릿수까지 표시.

![Description of the significant digits and display format](./images/readme/braun-calculator-readme-format.png)

## 기술 스택

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
