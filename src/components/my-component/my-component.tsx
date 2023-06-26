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
    console.log(event.detail);
  }

  render() {
    return <keka-slider minValue={0} maxValue={100} minGap={10} left={20} right={70}></keka-slider>;
  }
}
