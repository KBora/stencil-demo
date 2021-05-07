import { newE2EPage } from '@stencil/core/testing';

describe('twds-hexagram', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<twds-hexagram></twds-hexagram>');

    const element = await page.find('twds-hexagram');
    expect(element).toHaveClass('hydrated');
  });
});
