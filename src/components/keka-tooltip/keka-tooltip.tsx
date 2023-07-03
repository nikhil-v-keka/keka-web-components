import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'keka-tooltip',
  styleUrl: 'keka-tooltip.css',
  shadow: false,
})
export class KekaTooltip {
  @Prop() text: string = '';
  @Prop() position: string = 'top';
  @Prop() arrow: boolean = false;
  @Prop() backgroundColor: string = 'black';

  @Element() hostElement: HTMLElement;

  componentDidLoad() {
    if (this.arrow) {
      this.addHoverEffect();
    }
  }

  addHoverEffect() {
    const tooltip = this.hostElement.querySelector('.tooltip');
    tooltip.addEventListener('mouseover', function () {
      tooltip.classList.add('hovered');
    });

    tooltip.addEventListener('mouseout', function () {
      tooltip.classList.remove('hovered');
    });
  }

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
