// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// We can just import the CSS here and it will 'pass down' to all rendered components
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
