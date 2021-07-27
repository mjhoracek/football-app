import { GlobalStyles, CssReset } from '../styles/globals'
import Head from 'next/head'
import { CssBaseline } from '@material-ui/core'

function MyApp({ Component, pageProps }) {

  return (
    <>
        <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&display=swap" rel="stylesheet" />
        </Head>

          <GlobalStyles />
          <CssReset />
        <Component {...pageProps} />
    </>
  )
}

export default MyApp
