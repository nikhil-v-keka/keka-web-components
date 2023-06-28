import { Component, Host, h, Prop, Element, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'keka-toggle',
  styleUrl: 'keka-toggle.css',
  shadow: false,
})
export class KekaToggle {
  @Prop() text: string = '';
  @Prop() disabled: boolean = false;
  @Prop() label: string = '';
  @Prop() bordered: boolean = false;
  @Prop() size: string = 'regular';
  @Prop() isActive: boolean = false;

  @Element() el: HTMLElement;

  @Event() toggleInput: EventEmitter<boolean>;

  checkboxElement: HTMLInputElement;
  outerContainer: HTMLElement;
  componentDidLoad() {
    this.checkboxElement = this.el.querySelector('input[type="checkbox"]') as HTMLInputElement;
    this.outerContainer = this.el.querySelector('.label');

    if (this.isActive) {
      this.checkboxElement.checked = true;
    }
  }

  render() {
    return (
      <Host class={'d-flex'}>
        <div>
          <label class={`toggle ${this.size === 'regular' ? 'regular' : 'large'} ${this.bordered ? 'border' : ''}`}>
            <input type="checkbox" disabled={this.disabled} onClick={() => this.toggleInput.emit(this.checkboxElement.checked)} />
            <span class="toggle-slider"></span>
          </label>
        </div>
        <div class={`${this.size === 'regular' ? 'toggle-text-regular' : 'toggle-text-large'} content`}>
          <div class="text-content">{this.text}</div>
          <div class="label-content">{this.label}</div>
        </div>
      </Host>
    );
  }
}
