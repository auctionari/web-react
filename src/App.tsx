import React from 'react';
import { Button, Calendar } from 'antd';
import './App.css';

function onPanelChange(value: any, mode: any) {
  console.log(value, mode);
}

function App() {
  return (
    <div className="App">
      <Button type="primary">Button</Button>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <Calendar onPanelChange={onPanelChange} />
    </div>
  );
}

export default App;
