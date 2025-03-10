import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { createServer } from 'miragejs';

createServer({
    routes() {
        this.namespace = 'api';

        this.get('/transactions', () =>{
            return [{
                id: 1,
                title: 'Transaction 1',
                amount: 400,
                type: 'deposit',
                category: 'food',
                createdAt: new Date()
            }];
        })
    }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
