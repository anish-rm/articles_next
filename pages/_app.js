import '@/styles/globals.css'

import Layout from '@/components/Layout'

export default function App({ Component, pageProps }) {
  return(
    // <Component {...pageProps} />
    // creating our own layout
    <Layout>
      <Component {...pageProps} /> 
      {/* this will passed as a chiild to layout component */}
    </Layout>
    
  ) 
}
