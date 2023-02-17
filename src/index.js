import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*import TestHeader from './components/TestHeader.js';
import TestMainContent from './components/TestMainContent';
import TestFooter from './components/TestFooter';*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
const page = ReactDOM.createRoot(document.getElementById('root1'));
page.render(
  <div>
  <img src={reactLogo} alt="React" width="40px"/>
  <h1>Fun facts about React w/ Variable</h1>
  <ul>
    <li>Was first released in 2013</li>
    <li>Was originally created by Jordan Walke</li>
    <li>Has well over 100K stars on Github</li>
    <li>Is maintained by Facebook</li>
    <li>Powers thousands of enterprise apps, including mobile apps</li>
  </ul>
  </div>
)
*/

/*function Page(){
  return(
    <div>
      <TestHeader />
      <TestMainContent />
      <TestFooter />
    </div>
  )
}

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(<Page />);
const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(<Page />);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
