import React from 'react';

import './App.css';
import { BaseRouter } from '../routes';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const App = () => {
  return (
    <div className="App">
      <BaseRouter />
    </div>
  );
};

export default App;
