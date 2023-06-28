import { newE2EPage } from '@stencil/core/testing';

describe('keka-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<keka-tooltip></keka-tooltip>');

    const element = await page.find('keka-tooltip');
    expect(element).toHaveClass('hydrated');
  });
});
