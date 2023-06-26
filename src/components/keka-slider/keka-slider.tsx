import { Component, EventEmitter, h, Host, Prop, Event, Element, State } from '@stencil/core';

@Component({
  tag: 'keka-slider',
  styleUrl: 'keka-slider.css',
  shadow: false,
})
export class KekaSlider {
  @Prop() minValue = 0;
  @Prop() maxValue = 100;
  @Prop() minGap = 0;
  @Prop() left = 0;
  @Prop() right = 100;

  @Event() onRangeChanged: EventEmitter<number[]>;
  @Element() el: HTMLElement;

  @State() percentage: number = 0;
  @State() leftValue = this.left;
  @State() rightValue = this.right;

  componentDidLoad() {
    let progress = this.el.querySelector('.progress') as HTMLElement;
    progress.style.left = this.leftValue + '%';
    progress.style.right = 100 - this.rightValue + '%';

    let sliderValues = this.el.querySelectorAll('.display') as undefined as HTMLElement[];
    sliderValues[0].style.left = this.leftValue + '%';
    sliderValues[1].style.left = this.rightValue - 12 + '%';
  }

  onRangeInput(event: InputEvent) {
    let rangeInput = this.el.querySelectorAll('.range-input'),
      leftValue = parseInt((rangeInput[0] as HTMLInputElement).value),
      rightValue = parseInt((rangeInput[1] as HTMLInputElement).value),
      display = this.el.querySelectorAll('.display'),
      leftPercentage = (leftValue / (this.maxValue - this.minValue)) * 100,
      rightPercentage = (rightValue / (this.maxValue - this.minValue)) * 100;

    const progress = this.el.querySelector('.progress') as HTMLElement;

    if (rightValue - leftValue < this.minGap) {
      if ((event.target as HTMLInputElement).className.includes('range-min')) (rangeInput[0] as HTMLInputElement).value = rightValue - this.minGap + '';
      else (rangeInput[1] as HTMLInputElement).value = leftValue + this.minGap + '';
    } else {
      progress.style.right = 100 - rightPercentage + '%';
      progress.style.left = leftPercentage + '%';
      this.leftValue = Math.floor(leftPercentage);
      this.rightValue = Math.floor(rightPercentage);
      (display[1] as HTMLElement).style.left = rightPercentage - 12 + '%';
      (display[0] as HTMLElement).style.left = leftPercentage + '%';
    }
    this.emitRangeValues(leftValue, rightValue);
  }

  emitRangeValues(left: number, right: number) {
    this.onRangeChanged.emit([left, right]);
  }
  render() {
    return (
      <Host>
        <div class="wrapper">
          <div class="slider">
            <div class="progress"></div>
          </div>
          <div class="slider-range-input">
            <input type="range" id="rangeMin" class="range-input range-min" min={this.minValue} max={this.maxValue} value={this.leftValue} onInput={this.onRangeInput.bind(this)} />
            <input
              type="range"
              id="rangeMax"
              class="range-input range-max"
              min={this.minValue}
              max={this.maxValue}
              value={this.rightValue}
              onInput={this.onRangeInput.bind(this)}
            />
          </div>
          <div class="progress-values m-8">
            <div class="left-value display">{this.leftValue}%</div>
            <div class="right-value display">{this.rightValue}%</div>
          </div>
        </div>
        <slot></slot>
      </Host>
    );
  }
}
