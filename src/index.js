import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  uri: 'https://3af302d9-8dd1-4bfc-8829-fdca59536d4d.mock.pstmn.io',
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

reportWebVitals();
