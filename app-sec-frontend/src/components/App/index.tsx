import React from 'react';
import logo from '../../logo.svg';
import './index.css';
import Main from "../Main";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <a
            className="App-link"
            href="https://ru.reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Main/>
      </header>
    </div>
  );
}
