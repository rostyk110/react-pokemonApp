import React from 'react';
import { Landing } from './components/layout/Landing';

// Redux
import { Provider } from 'react-redux';
import store from './store/index';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Landing />
    </Provider>
  );
}

export default App;
