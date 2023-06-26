import { newSpecPage } from '@stencil/core/testing';
import { KekaSlider } from '../keka-slider';

describe('keka-slider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KekaSlider],
      html: `<keka-slider></keka-slider>`,
    });
    expect(page.root).toEqualHtml(`
      <keka-slider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </keka-slider>
    `);
  });
});
