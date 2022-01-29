import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { withSelectContext } from '../context/SelectContext';
import { ThemeProvider } from '@mui/system';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default withSelectContext(MyApp);
