import '@/styles/globals.css'
import Layout from "@/components/layout";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
const App = ({ Component, pageProps }) => {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default App;