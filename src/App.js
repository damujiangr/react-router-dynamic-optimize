import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import antd
import { Button, Progress } from 'antd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type="primary">Primary</Button>
        <div>
            <Progress type="circle" percent={30} width={80} />
        </div>
      </div>
    );
  }
}

export default App;
