import { createGlobalStyle } from 'styled-components';

export const DefaultTheme = createGlobalStyle`

  html {
    --iso-colorTransitionSpeed: 0.2s;
    --iso-mainColour: #88d498;
    --iso-mainBg: #fbf7ef;
    --iso-mainText: #14665F;
    --iso-mainTextLight: #1a936f;
    
    --iso-sidepanelBg:  #c6dabf;
    --iso-sidepanelText: #fbf7ef;
    
    --iso-searchButtonText: #1a936f;
    --iso-searchButtonBorder: #1a936f;
    --iso-searchButtonHoverText: #fff; 
    --iso-searchButtonHoverColor: #88d498;

    --iso-recordViewBg: #ffffff;
  }

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
`;
