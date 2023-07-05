import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'keka-test-tooltip',
  styleUrl: 'keka-test-tooltip.css',
  shadow: true,
})
export class KekaTestTooltip {
  @Prop() text: string = '';
  @Prop() position: string = 'top';
  @Prop() arrow: boolean = true;
  @Prop() theme: string = 'dark';

  @Element() hostElement: HTMLElement;

  componentWillLoad() {
    if (this.theme === 'light') {
      this.hostElement.style.setProperty('--background-color', '#fff');
      this.hostElement.style.setProperty('--text-color', '#000');
    }
  }

  componentDidLoad() {
    // if(this.arrow){
    //   this.addHoverEffect();
    // }

    this.hostElement.shadowRoot.querySelector('.tooltip').innerHTML = this.text;
  }

  render() {
    return (
      <Host>
        <div class="tooltip-container">
          <div class="tooltip-trigger">
            <slot></slot>
          </div>
          <div class={`tooltip ${this.position} ${this.theme === 'light' ? 'shadow' : ''}  ${this.arrow ? '' : 'no-arrow'}`}></div>
        </div>
      </Host>
    );
  }
}
