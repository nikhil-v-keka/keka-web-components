import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'keka-test-tooltip',
  styleUrl: 'keka-test-tooltip.css',
  shadow: true,
})
export class KekaTestTooltip {
  @Prop() text: string = '';
  render() {
    return (
      <Host>
        <div class="tooltip-container">
          <div class="tooltip-trigger">
            <slot></slot>
          </div>
          <div class={`tooltip tooltip-right`}>{this.text}</div>
        </div>
      </Host>
    );
  }
}
