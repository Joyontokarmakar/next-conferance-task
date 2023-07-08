import '@/styles/globals.css'
import Layout from "@/components/layout";
import {ApolloProvider} from "@apollo/client";
import client from "../../lib/client";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
const App = ({ Component, pageProps }) => {
  return (
      <ApolloProvider client={client}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </ApolloProvider>
  )
}

export default App;