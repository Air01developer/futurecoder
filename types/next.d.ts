declare module 'next/head' {
  import type { ComponentType, ReactNode } from 'react'

  export type HeadProps = {
    children?: ReactNode
  }

  const Head: ComponentType<HeadProps>
  export default Head
}

declare module 'next/app' {
  import type { ComponentType } from 'react'

  export type AppProps<P = {}> = {
    Component: ComponentType<P>
    pageProps: P
  }
}

declare module 'next' {
  export * from 'next/app'
}
