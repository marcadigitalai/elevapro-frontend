import React from 'react'
import ReactDOM from 'react-dom/client'
import { createIcons } from 'duo-icons';
import App from './App.jsx'
import './index.css'

createIcons();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
