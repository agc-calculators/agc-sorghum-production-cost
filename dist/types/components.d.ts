/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import './stencil.core';




export namespace Components {

  interface AgcSorghumProductionCostInputs {
    'socket': string;
  }
  interface AgcSorghumProductionCostInputsAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcSorghumProductionCostProgress {
    'socket': string;
  }
  interface AgcSorghumProductionCostProgressAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcSorghumProductionCostResultsPlaceholder {}
  interface AgcSorghumProductionCostResultsPlaceholderAttributes extends StencilHTMLAttributes {}

  interface AgcSorghumProductionCostResults {
    'socket': string;
  }
  interface AgcSorghumProductionCostResultsAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcSorghumProductionCost {
    'mode': "full" | "step";
    'socket': string;
    'tract': string;
    'units': any;
  }
  interface AgcSorghumProductionCostAttributes extends StencilHTMLAttributes {
    'mode'?: "full" | "step";
    'onAgcCalculated'?: (event: CustomEvent) => void;
    'onAgcStepChanged'?: (event: CustomEvent) => void;
    'socket'?: string;
    'tract'?: string;
    'units'?: any;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AgcSorghumProductionCostInputs': Components.AgcSorghumProductionCostInputs;
    'AgcSorghumProductionCostProgress': Components.AgcSorghumProductionCostProgress;
    'AgcSorghumProductionCostResultsPlaceholder': Components.AgcSorghumProductionCostResultsPlaceholder;
    'AgcSorghumProductionCostResults': Components.AgcSorghumProductionCostResults;
    'AgcSorghumProductionCost': Components.AgcSorghumProductionCost;
  }

  interface StencilIntrinsicElements {
    'agc-sorghum-production-cost-inputs': Components.AgcSorghumProductionCostInputsAttributes;
    'agc-sorghum-production-cost-progress': Components.AgcSorghumProductionCostProgressAttributes;
    'agc-sorghum-production-cost-results-placeholder': Components.AgcSorghumProductionCostResultsPlaceholderAttributes;
    'agc-sorghum-production-cost-results': Components.AgcSorghumProductionCostResultsAttributes;
    'agc-sorghum-production-cost': Components.AgcSorghumProductionCostAttributes;
  }


  interface HTMLAgcSorghumProductionCostInputsElement extends Components.AgcSorghumProductionCostInputs, HTMLStencilElement {}
  var HTMLAgcSorghumProductionCostInputsElement: {
    prototype: HTMLAgcSorghumProductionCostInputsElement;
    new (): HTMLAgcSorghumProductionCostInputsElement;
  };

  interface HTMLAgcSorghumProductionCostProgressElement extends Components.AgcSorghumProductionCostProgress, HTMLStencilElement {}
  var HTMLAgcSorghumProductionCostProgressElement: {
    prototype: HTMLAgcSorghumProductionCostProgressElement;
    new (): HTMLAgcSorghumProductionCostProgressElement;
  };

  interface HTMLAgcSorghumProductionCostResultsPlaceholderElement extends Components.AgcSorghumProductionCostResultsPlaceholder, HTMLStencilElement {}
  var HTMLAgcSorghumProductionCostResultsPlaceholderElement: {
    prototype: HTMLAgcSorghumProductionCostResultsPlaceholderElement;
    new (): HTMLAgcSorghumProductionCostResultsPlaceholderElement;
  };

  interface HTMLAgcSorghumProductionCostResultsElement extends Components.AgcSorghumProductionCostResults, HTMLStencilElement {}
  var HTMLAgcSorghumProductionCostResultsElement: {
    prototype: HTMLAgcSorghumProductionCostResultsElement;
    new (): HTMLAgcSorghumProductionCostResultsElement;
  };

  interface HTMLAgcSorghumProductionCostElement extends Components.AgcSorghumProductionCost, HTMLStencilElement {}
  var HTMLAgcSorghumProductionCostElement: {
    prototype: HTMLAgcSorghumProductionCostElement;
    new (): HTMLAgcSorghumProductionCostElement;
  };

  interface HTMLElementTagNameMap {
    'agc-sorghum-production-cost-inputs': HTMLAgcSorghumProductionCostInputsElement
    'agc-sorghum-production-cost-progress': HTMLAgcSorghumProductionCostProgressElement
    'agc-sorghum-production-cost-results-placeholder': HTMLAgcSorghumProductionCostResultsPlaceholderElement
    'agc-sorghum-production-cost-results': HTMLAgcSorghumProductionCostResultsElement
    'agc-sorghum-production-cost': HTMLAgcSorghumProductionCostElement
  }

  interface ElementTagNameMap {
    'agc-sorghum-production-cost-inputs': HTMLAgcSorghumProductionCostInputsElement;
    'agc-sorghum-production-cost-progress': HTMLAgcSorghumProductionCostProgressElement;
    'agc-sorghum-production-cost-results-placeholder': HTMLAgcSorghumProductionCostResultsPlaceholderElement;
    'agc-sorghum-production-cost-results': HTMLAgcSorghumProductionCostResultsElement;
    'agc-sorghum-production-cost': HTMLAgcSorghumProductionCostElement;
  }


}
