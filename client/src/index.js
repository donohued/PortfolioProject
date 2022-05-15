import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SecretPage from './components/Pages/Secret/secretpage'
import App from './components/App/App';



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


