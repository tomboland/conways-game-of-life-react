import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import ConwaysGameOfLife from "./components/ConwaysGameOfLife";

  
  ReactDOM.render(
    <ConwaysGameOfLife gridSizeX={24} gridSizeY={16} />,
    document.getElementById('root')
  );
  