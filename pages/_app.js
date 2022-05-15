import * as React from 'react'
import NextApp from 'next/app'
import '@the-innovation-circuit/theme/fonts/fonts.css'
import theme from '@the-innovation-circuit/theme'
import { ThemeProvider } from 'theme-ui'
import Script from 'next/script'
import '../public/app.css'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider
        theme={{
          ...theme,
          fonts: {
            body: "'Readex Pro', sans-serif",
            heading: "'Readex Pro', sans-serif",
            monospace: 'Menlo, monospace',
          },
          colors: { ...theme.colors, modes: {}, red: '#E83D3D', primary: '#E83D3D', purple: '#B815BF', blue: '#4169E1', green: '#0EB5A1' }
        }}
      >
        <Script data-website-id="a1f8620f-b074-427a-949f-2eca89606c54" src="https://analytics.sampoder.com/umami.js" />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
