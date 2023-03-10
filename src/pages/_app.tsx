import { Providers } from '@src/contexts'
import '@src/styles/globals.css'
import type { AppProps } from 'next/app'
import 'regenerator-runtime/runtime'
import { QueryClientProvider } from 'react-query';
import { queryClient } from './../services/queryClient';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Providers>
  )
}
