import { newSpecPage } from '@stencil/core/testing';
import { TwdsHexagram } from '../twds-hexagram';

describe('twds-hexagram', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TwdsHexagram],
      html: `<twds-hexagram></twds-hexagram>`,
    });
    expect(page.root).toEqualHtml(`
      <twds-hexagram>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </twds-hexagram>
    `);
  });
});
