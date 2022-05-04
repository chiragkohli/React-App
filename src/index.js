import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const container = document.getElementById('root');
// ReactDOM.render(<App />, container);
ReactDOM.createRoot(container).render(<App />);
registerServiceWorker();
