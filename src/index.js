import React from "react";
import ReactDOM from "react-dom";

import { ContextProvider } from './context/Auth.context.js';

import App from './App'
import "./styles.css";


function AppWithProvider() {
  return (
    <ContextProvider value={500}>
      <div class="card error fluid">
        <h4>Login Flow w/ React Context</h4>
      </div>
      
      <App />
    </ContextProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<AppWithProvider />, rootElement);