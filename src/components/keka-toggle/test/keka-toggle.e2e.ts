import { newE2EPage } from '@stencil/core/testing';

describe('keka-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<keka-toggle></keka-toggle>');

    const element = await page.find('keka-toggle');
    expect(element).toHaveClass('hydrated');
  });
});
