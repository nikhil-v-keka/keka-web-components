import { newSpecPage } from '@stencil/core/testing';
import { KekaTestTooltip } from '../keka-test-tooltip';

describe('keka-test-tooltip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KekaTestTooltip],
      html: `<keka-test-tooltip></keka-test-tooltip>`,
    });
    expect(page.root).toEqualHtml(`
      <keka-test-tooltip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </keka-test-tooltip>
    `);
  });
});
