import type { AppProps } from 'next/app'
import { ChallengesProvider } from '../contexts/ChallengesContext';

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ChallengesProvider>
          <Component {...pageProps} />
      </ChallengesProvider>
    );
}

export default MyApp
