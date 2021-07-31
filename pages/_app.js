import { GlobalStyles, CssReset } from '../styles/globals'
import Head from 'next/head'
import { CssBaseline } from '@material-ui/core'
import { AuthProvider } from '../contexts/AuthContext'

function MyApp({ Component, pageProps }) {

  return (
    <>
    <AuthProvider>
        <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&display=swap" rel="stylesheet" />
        </Head>

          <GlobalStyles />
          <CssReset />
        <Component {...pageProps} />
    </AuthProvider>
    </>
  )
}

export default MyApp
