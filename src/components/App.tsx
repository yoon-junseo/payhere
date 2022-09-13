import React from 'react';
import { SWRConfig } from 'swr';

import errorHandler from '@/lib/utils/errorHandler';

import Router from '@/Router';

const App = () => {
  return (
    <SWRConfig
      value={{
        onError: errorHandler,
      }}
    >
      <Router />
    </SWRConfig>
  );
};

export default App;
