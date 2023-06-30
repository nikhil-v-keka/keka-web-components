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

        <keka-tooltip position="top" text="this is a sample tool tip mainlu used for testing purpose in our component">
          <h1>hi hello</h1>
        </keka-tooltip>

        <keka-tooltip text="This is a tooltip" position="bottom">
          <button>Hover Me</button>
        </keka-tooltip>

        <keka-tooltip position="bottom" text="manage you skills">
          <div class="content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusamus consectetur minima cupiditate eaque perferendis unde vel optio vero odio molestias ad ut
            iure, blanditiis quasi nobis aspernatur explicabo iste?
          </div>
        </keka-tooltip>
        <p></p>
      </div>
    );
  }
}
