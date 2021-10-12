import { GlobalStyles, CssReset } from '../styles/globals'
import Head from 'next/head'
import { AuthProvider } from '../contexts/AuthContext'
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

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
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
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
      </Provider>
    </QueryClientProvider>
    </>
  )
}

export default MyApp
