import Document, {
  DocumentContext,
  Html,
  Main,
  NextScript
} from 'next/document'
import Head from 'next/head'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            <Head>
              <link rel="manifest" href="/manifest.json" />
            </Head>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
        render() {
          return (
            <Html lang="pt-BR">
              <body className="font-helvetica">
                <Main />
                <NextScript />
              </body>
            </Html>
          )
        }
      }
    } finally {
      sheet.seal()
    }
  }
}
