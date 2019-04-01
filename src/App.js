import React, { Component } from 'react';

import { Qipan } from './components/qipan';
import { Qizi } from './components/qizi';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Qipan />
        <Qizi />
      </div>
    );
  }
}

export default App;
