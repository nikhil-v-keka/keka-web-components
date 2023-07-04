import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'keka-tooltip',
  styleUrl: 'keka-tooltip.css',
  shadow: false,
})
export class KekaTooltip {
  @Prop() text: string = '';
  @Prop() position: string = 'top';
  @Prop() arrow: boolean = true;
  @Prop() backgroundColor: string = 'black';
  @Prop() width: string = '300px';
  @Element() hostElement: HTMLElement;

  componentDidLoad() {
    if (this.arrow) {
      this.addHoverEffect();
    }
    console.log(window.getComputedStyle(this.hostElement.querySelector('.tooltip'), ':before').getPropertyValue('width'));

    // console.log( window.getComputedStyle(
    //   document.querySelector('.tooltip'), ':before'
    // ));
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
        <div class={`tooltip ${this.position}`} display-text={this.text} tooltip-width={this.width}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
