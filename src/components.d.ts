/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface KekaSlider {
        "displayValues": boolean;
        "left": number;
        "maxValue": number;
        "minGap": number;
        "minValue": number;
        "right": number;
        "tooltip": boolean;
    }
    interface KekaTestTooltip {
        "arrow": boolean;
        "position": string;
        "text": string;
        "theme": string;
        "width": string;
    }
    interface KekaToggle {
        "bordered": boolean;
        "disabled": boolean;
        "isActive": boolean;
        "label": string;
        "size": string;
        "text": string;
    }
    interface KekaTooltip {
        "arrow": boolean;
        "backgroundColor": string;
        "position": string;
        "text": string;
        "width": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
export interface KekaSliderCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLKekaSliderElement;
}
export interface KekaToggleCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLKekaToggleElement;
}
declare global {
    interface HTMLKekaSliderElement extends Components.KekaSlider, HTMLStencilElement {
    }
    var HTMLKekaSliderElement: {
        prototype: HTMLKekaSliderElement;
        new (): HTMLKekaSliderElement;
    };
    interface HTMLKekaTestTooltipElement extends Components.KekaTestTooltip, HTMLStencilElement {
    }
    var HTMLKekaTestTooltipElement: {
        prototype: HTMLKekaTestTooltipElement;
        new (): HTMLKekaTestTooltipElement;
    };
    interface HTMLKekaToggleElement extends Components.KekaToggle, HTMLStencilElement {
    }
    var HTMLKekaToggleElement: {
        prototype: HTMLKekaToggleElement;
        new (): HTMLKekaToggleElement;
    };
    interface HTMLKekaTooltipElement extends Components.KekaTooltip, HTMLStencilElement {
    }
    var HTMLKekaTooltipElement: {
        prototype: HTMLKekaTooltipElement;
        new (): HTMLKekaTooltipElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "keka-slider": HTMLKekaSliderElement;
        "keka-test-tooltip": HTMLKekaTestTooltipElement;
        "keka-toggle": HTMLKekaToggleElement;
        "keka-tooltip": HTMLKekaTooltipElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface KekaSlider {
        "displayValues"?: boolean;
        "left"?: number;
        "maxValue"?: number;
        "minGap"?: number;
        "minValue"?: number;
        "onRangeChanged"?: (event: KekaSliderCustomEvent<number[]>) => void;
        "right"?: number;
        "tooltip"?: boolean;
    }
    interface KekaTestTooltip {
        "arrow"?: boolean;
        "position"?: string;
        "text"?: string;
        "theme"?: string;
        "width"?: string;
    }
    interface KekaToggle {
        "bordered"?: boolean;
        "disabled"?: boolean;
        "isActive"?: boolean;
        "label"?: string;
        "onToggleInput"?: (event: KekaToggleCustomEvent<boolean>) => void;
        "size"?: string;
        "text"?: string;
    }
    interface KekaTooltip {
        "arrow"?: boolean;
        "backgroundColor"?: string;
        "position"?: string;
        "text"?: string;
        "width"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "keka-slider": KekaSlider;
        "keka-test-tooltip": KekaTestTooltip;
        "keka-toggle": KekaToggle;
        "keka-tooltip": KekaTooltip;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "keka-slider": LocalJSX.KekaSlider & JSXBase.HTMLAttributes<HTMLKekaSliderElement>;
            "keka-test-tooltip": LocalJSX.KekaTestTooltip & JSXBase.HTMLAttributes<HTMLKekaTestTooltipElement>;
            "keka-toggle": LocalJSX.KekaToggle & JSXBase.HTMLAttributes<HTMLKekaToggleElement>;
            "keka-tooltip": LocalJSX.KekaTooltip & JSXBase.HTMLAttributes<HTMLKekaTooltipElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
