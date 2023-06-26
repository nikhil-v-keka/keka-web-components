import { newE2EPage } from '@stencil/core/testing';

describe('keka-slider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<keka-slider></keka-slider>');

    const element = await page.find('keka-slider');
    expect(element).toHaveClass('hydrated');
  });
});
