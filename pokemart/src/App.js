
import React from 'react';
import { ToastContainer } from 'react-toastify';

import { GlobalsProvider } from './hooks';
import Home from './Home';

const App = () => (
  <>
    <GlobalsProvider>
      <Home />
    </GlobalsProvider>

    <ToastContainer autoClose={3000} />
  </>
);

export default App;
