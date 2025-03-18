import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Theme} from './src/utils';
import Routes from './src/routes';

import {StatusBar} from 'react-native';
import { colors } from './src/utils/theme';

const theme = Theme.createTheme();

const App = () => {
  return (
   <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.greyWhite} />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
      </>
  
  );
};

export default App;
