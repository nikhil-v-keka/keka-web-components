import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'keka-tooltip',
  styleUrl: 'keka-tooltip.css',
  shadow: true,
})
export class KekaTooltip {
  @Prop() text: string = '';
  @Prop() position: string = 'top';
  @Prop() arrow: boolean = true;
  @Prop() backgroundColor: string = 'black';

  render() {
    return (
      <Host>
        <div class={`tooltip ${this.position}`} display-text={this.text}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
