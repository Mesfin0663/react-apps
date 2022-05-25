import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Firebase, { FirebaseContext } from './components/Firebase';
import * as serviceWorker from './serviceWorker';
import {ThemeProvider} from "@mui/material"
import {theme} from './widgets/theme/Theme'

ReactDOM.render(
  <React.StrictMode>
   <FirebaseContext.Provider value={new Firebase()}>
     <ThemeProvider theme={theme}>
     <App />

     </ThemeProvider>
  </FirebaseContext.Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();

reportWebVitals();

