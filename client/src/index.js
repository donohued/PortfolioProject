import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SecretPage from './routes/secretpage'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      
      <Routes>
        <Route path="/*" element={<App />}/>
        <Route path="/secret" element={<SecretPage/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
