import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ConwaysGameOfLife from "./components/ConwaysGameOfLife";

  
  ReactDOM.render(
    <ConwaysGameOfLife gridSizeX={64} gridSizeY={24} />,
    document.getElementById('root')
  );
  