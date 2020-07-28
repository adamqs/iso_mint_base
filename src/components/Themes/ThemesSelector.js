import React from 'react';
import { DefaultTheme, IsoTheme, FallbackTheme } from './index';

// provides the switching mechanism for selecting the global style for the whole app
// the global style's sole purpose is to provide the global variables for the whole app

export const ThemesSelector = ({ theme }) => {
  switch (theme) {
    case 'default':
      return <DefaultTheme />;
    case 'iso':
      return <IsoTheme />;
    default:
      return <FallbackTheme />;
  }
};
