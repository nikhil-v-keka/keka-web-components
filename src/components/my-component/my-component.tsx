import { Component, Prop, h } from '@stencil/core';
// import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  // private getText(): string {
  //   return format(this.first, this.middle, this.last);
  // }

  getRangeValues(event: CustomEvent) {
    console.log(event.detail);
  }

  getToggleValue(event: CustomEvent) {
    console.log(event.detail);
  }

  render() {
    return (
      <div class="test">
        <keka-slider minValue={20} maxValue={150} minGap={20} left={40} right={70} displayValues tooltip={true} onRangeChanged={this.getRangeValues}></keka-slider>
        <keka-slider minValue={0} maxValue={100} minGap={20} left={40} right={70} displayValues></keka-slider>
        <h2>default one</h2>
        <keka-slider></keka-slider>

        <h1>Keka Toggles</h1>
        <div class="d-flex">
          <keka-toggle size="large" bordered onToggleInput={this.getToggleValue}></keka-toggle>
          <keka-toggle disabled size="large" text="disabled"></keka-toggle>
          <keka-toggle></keka-toggle>
          <keka-toggle text="nikhil" label="my name is nikhil"></keka-toggle>
        </div>

        <div class="tooltip-elements d-flex">
          <keka-test-tooltip
            text="<h4>Hi hello</h4>
          <p>
            my name is nikhil 
          </p>"
            position="right"
          >
            <div>
              <h3>Hi hello </h3>
            </div>
          </keka-test-tooltip>

          <keka-test-tooltip text="Unpaid Leave - Leave deducted as no attendance logged for 01-07-2023" position="top" theme="light" arrow={false}>
            <button>Hover Me</button>
          </keka-test-tooltip>
        </div>

        <div class="tooltip-elements d-flex">
          <keka-tooltip position="bottom" text="this is a sample tool tip mainlu used for testing purpose in our component" arrow={false}>
            <div>
              <h1>Hi hello </h1>
            </div>
          </keka-tooltip>

          <keka-tooltip text="This is a tooltip" position="left" backgroundColor="white">
            <button>Hover Me</button>
          </keka-tooltip>
        </div>

        <p></p>
        <div class="test-tooltip">
          <keka-tooltip text="hi hello, sample ">Hover me </keka-tooltip>
          <br />
          <keka-test-tooltip text="hi hello , my name is nikhil" position="top-left">
            <span>Hi hello , sample text for tooltip</span>
          </keka-test-tooltip>
        </div>
      </div>
    );
  }
}
