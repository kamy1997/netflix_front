import '../styles/styles.scss';

import { ApolloProvider } from "@apollo/client";
import client from "../apollo/apollo-client";
import { CartContextProvider } from '../context/cartContext';
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <CartContextProvider>
       
          <Component {...pageProps} />
      
      </CartContextProvider>
    </ApolloProvider>
  )
}

export default MyApp
