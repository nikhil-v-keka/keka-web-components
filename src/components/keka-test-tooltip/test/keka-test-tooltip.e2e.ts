import { newE2EPage } from '@stencil/core/testing';

describe('keka-test-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<keka-test-tooltip></keka-test-tooltip>');

    const element = await page.find('keka-test-tooltip');
    expect(element).toHaveClass('hydrated');
  });
});
