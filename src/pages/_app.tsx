import type { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/styles';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { theme } from '../theme';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
  credentials: 'include',
});

const App = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
