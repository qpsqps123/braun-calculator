export function formatValue(value) {
  if (value.toString().length > 10) {
    const exponentialForm = value.toExponential(4);
    return exponentialForm;
  } else {
    return value;
  }
}
