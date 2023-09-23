import { createClient, cacheExchange, fetchExchange } from '@urql/core'
import { Provider } from 'urql';

const client = createClient({
  url: 'http://localhost:1337/graphql',
  exchanges: [cacheExchange, fetchExchange],
})

export default function App({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}