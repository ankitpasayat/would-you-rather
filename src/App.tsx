/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import tw from 'twin.macro';
import './App.css';
import logo from './logo.svg';

const titleStyle = css`
  boxSizing: 'border-box';
  width: 300;
  height: 200;
  ${tw`text-black bg-blue-300`};
  `

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p css={titleStyle}>
          Pog
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
