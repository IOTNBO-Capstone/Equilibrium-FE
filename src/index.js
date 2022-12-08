import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  uri: 'https://b4e60499-e3a0-4c58-b2c4-78c2f78fc554.mock.pstmn.io/graphql',
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ApolloProvider client={ client }>
      <App />
    </ApolloProvider>
  </BrowserRouter>
);

reportWebVitals();
