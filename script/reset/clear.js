import { targetDisplayValue } from "../main.js";
import { clearGlobalData } from "../data/globalData.js";

export function clear() {
  clearGlobalData();
  targetDisplayValue.textContent = "0";
  targetDisplayValue.style.fontSize = "30px";
  targetDisplayValue.style.lineHeight = "1.1";
}
