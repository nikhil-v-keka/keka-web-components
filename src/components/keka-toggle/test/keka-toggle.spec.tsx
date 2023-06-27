import { newSpecPage } from '@stencil/core/testing';
import { KekaToggle } from '../keka-toggle';

describe('keka-toggle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KekaToggle],
      html: `<keka-toggle></keka-toggle>`,
    });
    expect(page.root).toEqualHtml(`
      <keka-toggle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </keka-toggle>
    `);
  });
});
