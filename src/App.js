import React from 'react';

import { createStore } from 'redux'
import todoApp from './reducers'

const store = createStore(todoApp) 

function App() {
  return (
    <>
    <p>oi</p>
    </>
  );
}

export default App;
