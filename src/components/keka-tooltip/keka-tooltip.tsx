import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'keka-tooltip',
  styleUrl: 'keka-tooltip.css',
  shadow: true,
})
export class KekaTooltip {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
