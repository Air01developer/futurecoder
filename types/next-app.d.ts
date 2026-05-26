declare module 'next/app' {
  import type { ComponentType } from 'react'

  export type AppProps<P = {}> = {
    Component: ComponentType<P>
    pageProps: P
  }
}
