import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    body * {
        letter-spacing: -0.5px;
        line-height: 20px;
    }
    * {
    box-sizing: border-box;
  }
  input {
      all: unset;
  }
  a {
      text-decoration: none;
  }
  button {
      border: none;
      background-color: transparent;
  }
  input::-ms-clear,
  input::-ms-reveal{
	display:none;width:0;height:0;
  }
  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button,
  input::-webkit-search-results-button,
  input::-webkit-search-results-decoration{
	display:none;
  }
`;
