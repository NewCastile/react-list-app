import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import './styles/app.css'
import { App } from './app'


ReactDOM.render(
  <div className="app-container">
    <App></App>
  </div>
  ,
  document.querySelector('.root')
);