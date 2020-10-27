import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/Card/Card'
import 'tachyons';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Card id={1} roboName ={'Robo Pal01'} roboEmail={'email@email.com'}/>
    <Card id={2} roboName ={'Robo Pal01'} roboEmail={'email@email.com'}/>
    <Card id={3} roboName ={'Robo Pal01'} roboEmail={'email@email.com'}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
