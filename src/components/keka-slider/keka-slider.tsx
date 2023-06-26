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
  @Prop() displayValues:boolean = true;
  @Prop() tooltip:boolean = true;

  @Event() onRangeChanged: EventEmitter<number[]>;
  @Element() el: HTMLElement;

  @State() leftPercentage=0;
  @State() rightPercentage=100;
  progressElement;
  rangeInputELements;
  progressValueElements;
  
  componentDidLoad() {
    this.progressElement = this.el.querySelector('.progress') as HTMLElement;
    this.rangeInputELements = Array.from(this.el.querySelectorAll('.range-input'),ele => ele as HTMLInputElement);
    this.progressValueElements = Array.from(this.el.querySelectorAll('.display'), ele => ele as HTMLElement);
    this.calculatePercentage(this.left,this.right);
    this.setProgressBar();
    this.setSliderValues();
  }

  setProgressBar(){    
      this.progressElement.style.left = this.leftPercentage + '%';
      this.progressElement.style.right = 100 - this.rightPercentage + '%';
  }

  calculatePercentage(left,right){
    this.leftPercentage = Math.floor(((left-this.minValue) / (this.maxValue - this.minValue)) * 100);
    this.rightPercentage = Math.floor(((right-this.minValue) / (this.maxValue - this.minValue)) * 100);  
  }
  setSliderValues(){
    this.progressValueElements[0].style.left = this.leftPercentage + '%';
    this.progressValueElements[1].style.left = this.rightPercentage - 12 + '%';
  }


  onRangeInput(event: InputEvent) {
      let
      currentLeftValue = parseInt(this.rangeInputELements[0].value),
      currentRightValue = parseInt(this.rangeInputELements[1].value);

      if (currentRightValue - currentLeftValue < this.minGap) {
        //change the code
        if ((event.target as HTMLInputElement).className.includes('range-min'))  //min-gap is taken as value not as percentage
        this.rangeInputELements[0].value = currentRightValue - this.minGap ;
        else
        this.rangeInputELements[1].value = currentLeftValue + this.minGap ;
      } 
      else {
        this.calculatePercentage(currentLeftValue,currentRightValue);
        this.setProgressBar();
        this.setSliderValues();
        this.emitRangeValues(currentLeftValue, currentRightValue);
      }

  }

  updateRangeValues(left,right){
    this.left = left;
    this.right = right;

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
            <input 
            type="range" 
            id="rangeMin" 
            class="range-input range-min" 
            min={this.minValue} 
            max={this.maxValue} 
            value={this.left} 
            onInput={this.onRangeInput.bind(this)} />

            <input
              type="range"
              id="rangeMax"
              class="range-input range-max"
              min={this.minValue}
              max={this.maxValue}
              value={this.right}
              onInput={this.onRangeInput.bind(this)}
            />
          </div>
          {
            this.displayValues ? <div class="progress-values m-8">
                                  <div class="left-value display">{this.leftPercentage}%</div>
                                  <div class="right-value display">{this.rightPercentage}%</div>
                                </div> 
                                : ''
          }
        </div>
        <slot></slot>
      </Host>
    );
  }
}