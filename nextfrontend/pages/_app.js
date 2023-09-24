import { createClient, cacheExchange, fetchExchange } from '@urql/core'
import { Provider } from 'urql';
import '../styles/globals.css';

const client = createClient({
  url: process.env.NEXT_PUBLIC_BACKEND_API,
  exchanges: [cacheExchange, fetchExchange],
})

export default function App({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}