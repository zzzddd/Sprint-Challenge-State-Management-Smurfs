
import React from 'react';
import './App.css';

import SmurfForm from './smurfForm';
import SmurfList from './smurfList';

const App = () => {
  return (
    <div className='App'>
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <div className='forms-wrapper'>
        <SmurfForm />
      </div>
      <SmurfList />
    </div>
  );
};

export default App;
