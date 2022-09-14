import React from 'react';
import { SWRConfig } from 'swr';

import errorHandler from '@/lib/utils/errorHandler';

import Router from '@/Router';

import { GlobalStyle } from '@/styles/GlobalStyle';

const App = () => {
  return (
    <SWRConfig
      value={{
        onError: errorHandler,
      }}
    >
      <GlobalStyle />
      <Router />
    </SWRConfig>
  );
};

export default App;
