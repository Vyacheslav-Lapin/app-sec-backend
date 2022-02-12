import React from 'react';
import logo from '../../logo.svg';
import './index.css';
import User from "../User";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://ru.reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <table>
        <tr>
          <th>nick name</th>
          <th>email</th>
          <th>name</th>
          <th>phone</th>
          <th>city</th>
        </tr>
        {[1,2,3,4,5,6,7,8,9,10].map(value => <User id={value}/>)}
      </table>
      </header>
    </div>
  );
}
