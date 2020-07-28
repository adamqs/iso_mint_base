import { createGlobalStyle } from 'styled-components';

export const DefaultTheme = createGlobalStyle`

  html {
    --iso-colorTransitionSpeed: 0.2s;
    --iso-mainColour: #88d498;
    --iso-mainBg: #fbf7ef;
    --iso-mainText: #1a936f;
    
    --iso-sidepanelBg:  #c6dabf;
    --iso-sidepanelText: #fbf7ef;
    
    --iso-searchButtonText: #1a936f;
    --iso-searchButtonBorder: #1a936f;
    --iso-searchButtonHoverText: #fff; 
    --iso-searchButtonHoverColor: #88d498;
  }
`;
