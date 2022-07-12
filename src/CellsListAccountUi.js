import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CellsListAccountUi-styles.js';
import '@bbva-web-components/bbva-web-card-product/bbva-web-card-product.js';
import '@bbva-web-components/bbva-web-button-default/bbva-web-button-default.js';
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<cells-list-account-ui></cells-list-account-ui>
```

##styling-doc

@customElement cells-list-account-ui
*/
export class CellsListAccountUi extends LitElement {
  static get is() {
    return 'cells-list-account-ui';
  }

  // Declare properties
  static get properties() {
    return {
      data: { type: Object },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.data = [];
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('cells-list-account-ui-shared-styles'),
    ];
  }

  _fire(nameEvent, detail) {
    const val = typeof detail === 'undefined' ? null : detail;
    this.dispatchEvent(
      new CustomEvent(nameEvent, {
        composed: true,
        bubbles: true,
        detail: val,
      })
    );
  }

  _onViewDetail(account) {
    const payload = { id: account.id };
    this._fire('view-detail-account', payload);
  }

  _formatAmount(currency, amount) {
    switch (currency) {
      case 'PEN':
        return `S/ ${Number(amount).toFixed(2)}`;
      case 'USD':
        return `$ ${Number(amount).toFixed(2)}`;
      default:
        return '';
    }
  }

  // Define a template
  render() {
    return html`
      <div class="container">
        <div class="accounts">
          <div class="accounts__header">Mis Cuentas</div>

          ${
            this.data.length === 0
              ? html`<div class="accounts__list--empty">
                  No tienes cuentas.
                </div>`
              : html`<div class="accounts__list">
                  <div class="accounts__list-item accounts-list-item">
                    ${this.data.map(
                      (account) => html`<div class="accounts-list-item__detail">
                        <bbva-web-card-product
                          subheading=${account.productName}
                          button-text="Ver detalle"
                          @button-click=${() => this._onViewDetail(account)}
                        >
                          <bbva-web-list-item-bullet slot="option">
                            Numero de cuenta: ${account.number}
                          </bbva-web-list-item-bullet>

                          <bbva-web-list-item-bullet slot="option">
                            Saldo disponible:
                            ${this._formatAmount(
                              account.currency,
                              account.amoutAvailable
                            )}
                          </bbva-web-list-item-bullet>
                        </bbva-web-card-product>
                      </div>`
                    )}
                  </div>
                </div>`
          }
          </div>
        </div>
      </div>
    `;
  }
}
