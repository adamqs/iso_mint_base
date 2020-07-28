import { createGlobalStyle } from 'styled-components';

export const IsoTheme = createGlobalStyle`

  html {
    --iso-colorTransitionSpeed: 0.2s;
    --iso-mainColour: #7c7bbf;
    --iso-mainBg: #F1F6F8;
    --iso-mainText: #3d5a80;
    
    --iso-sidepanelBg: #ecf0f3;
    --iso-sidepanelText: #3d5a80;

    --iso-searchButtonText: #7c7bbf;
    --iso-searchButtonBorder: #7c7bbf;
    --iso-searchButtonHoverText: #fff; 
    --iso-searchButtonHoverColor: #a5a6f9;

  /* fix for chrome autofill colour change */
  /* Change the white to any color ;) */
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
  /*Change text in autofill textbox*/
  input:-webkit-autofill {
    -webkit-text-fill-color: var(--iso-mainText) !important;
  }
  }
`;
