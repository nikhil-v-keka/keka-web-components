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

  @Listen('onRangeChanged', { target: 'document' })
  getValues(event: CustomEvent) {
    // console.log(event.detail);
  }

  render() {
    return <keka-slider minValue={20} maxValue={150} minGap={30} left={40} right={70} displayValues={true} tooltip={true}></keka-slider>;
  }
}
