import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CellsListAccountUi-styles.js';
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
      name: { type: String, },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.name = 'Cells';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('cells-list-account-ui-shared-styles')
    ];
  }

  // Define a template
  render() {
    return html`
      <slot></slot>
      <p>Welcome to ${this.name}</p>
    `;
  }
}
