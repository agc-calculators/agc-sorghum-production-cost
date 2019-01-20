
// AgcSorghumProductionCost: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './agc-sorghum-production-cost.core.js';
import {
  AgcSorghumProductionCost,
  AgcSorghumProductionCostInputs,
  AgcSorghumProductionCostProgress,
  AgcSorghumProductionCostResults,
  AgcSorghumProductionCostResultsPlaceholder
} from './agc-sorghum-production-cost.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    AgcSorghumProductionCost,
    AgcSorghumProductionCostInputs,
    AgcSorghumProductionCostProgress,
    AgcSorghumProductionCostResults,
    AgcSorghumProductionCostResultsPlaceholder
  ], opts);
}
