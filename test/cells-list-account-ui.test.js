/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import '../cells-list-account-ui.js';
import sinon from 'sinon';

suite('CellsListAccountUi', () => {
  let el;

  teardown(() => fixtureCleanup());

  let data = [
    {
      id: 'U0dJQ3NneXRRNlZCWTVuZnpHS3E',
      number: '00110241000299979661',
      currency: 'PEN',
      productName: 'CUENTA FACIL',
      amoutAvailable: 2834.14,
    },

    {
      id: 'b1dVSldRdDhXa3luTnFVSWdxTjg',
      number: '00110814000200089516',
      currency: 'PEN',
      productName: 'CUENTA INDEPENDENCIA',
      amoutAvailable: 0.0,
    },
  ];

  setup(async () => {
    el = await fixture(
      html`<cells-list-account-ui .data=${data}></cells-list-account-ui>`
    );
    await el.updateComplete;
  });

  test('Method _formatAmount', async () => {
    el._formatAmount('PEN', 100);
  });

  test('Method _formatAmount', async () => {
    el._formatAmount('USD', 100);
  });

  test('Method _formatAmount', async () => {
    el._formatAmount('', 0);
  });

  test('Method _onViewDetail', async () => {
    const spy = sinon.spy();
    el.addEventListener('view-detail-account', spy);
    el._onViewDetail({ id: 'b1dVSldRdDhXa3luTnFVSWdxTjg' });
    assert.isTrue(spy.called);
  });

  test('onClick _onViewDetail', async () => {
    let elementCard = el.shadowRoot.querySelector('bbva-web-card-product');
    const buttonCard = elementCard.shadowRoot.querySelector(
      'bbva-web-button-default'
    );
    buttonCard.click();
  });

  test('Method _fire', async () => {
    const payload = { id: 'b1dVSldRdDhXa3luTnFVSWdxTjg' };
    el._fire('view-detail-account', payload);
  });

  test('Method _fire', async () => {
    el._fire('view-detail-account', undefined);
  });

  test('change  data', async () => {
    el.data = [];
  });
});
