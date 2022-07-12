/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]),
[hidden] {
  display: none !important;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.accounts {
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  margin: 2rem;
  padding: 0 1rem;
}
.accounts__header {
  margin: 1rem 0;
  color: #004481;
  font-size: 1.5rem;
}
.accounts__list--empty {
  color: #666666;
  font-style: italic;
  margin: 1.5rem 0;
}

bbva-web-card-product {
  max-width: 100%;
}
`;