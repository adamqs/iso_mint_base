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
  }
`;
