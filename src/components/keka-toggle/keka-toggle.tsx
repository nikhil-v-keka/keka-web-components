import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'keka-toggle',
  styleUrl: 'keka-toggle.css',
  shadow: true,
})
export class KekaToggle {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
