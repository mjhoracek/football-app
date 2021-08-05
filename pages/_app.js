import { GlobalStyles, CssReset } from '../styles/globals'
import Head from 'next/head'
import { AuthProvider } from '../contexts/AuthContext'
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e'
    },
    secondary: {
      main: '#1b5e20'
    },
    input: {
      main: 'white'
    }
  }
})

function MyApp({ Component, pageProps }) {

  return (
    <>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&display=swap" rel="stylesheet" />
        </Head>

          <GlobalStyles />
          <CssReset />
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
    </>
  )
}

export default MyApp
