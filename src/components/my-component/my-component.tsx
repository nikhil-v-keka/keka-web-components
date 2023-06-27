import { Component, Prop, h, Listen } from '@stencil/core';
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

  // @Listen('rangeChanged', { target: 'document' })
  // getValues(event: CustomEvent) {
  //   console.log(event.detail);
  // }
  getRangeValues(event: CustomEvent) {
    console.log(event.detail);
  }
  render() {
    return (
      <div class="test">
        <keka-slider minValue={20} maxValue={150} minGap={20} left={40} right={70} displayValues tooltip={true} onRangeChanged={this.getRangeValues}></keka-slider>
        <keka-slider minValue={0} maxValue={100} minGap={20} left={40} right={70} displayValues={true} tooltip={true}></keka-slider>
        <h2>default one</h2>
        <keka-slider></keka-slider>

        <h1>Keka Toggles</h1>
        <keka-toggle></keka-toggle>
      </div>
    );
  }
}
