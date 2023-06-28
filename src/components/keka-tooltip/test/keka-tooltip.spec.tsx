import { newSpecPage } from '@stencil/core/testing';
import { KekaTooltip } from '../keka-tooltip';

describe('keka-tooltip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KekaTooltip],
      html: `<keka-tooltip></keka-tooltip>`,
    });
    expect(page.root).toEqualHtml(`
      <keka-tooltip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </keka-tooltip>
    `);
  });
});
