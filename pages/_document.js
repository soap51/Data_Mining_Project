import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <link href="https://fonts.googleapis.com/css?family=Prompt" rel="stylesheet" />
            <link rel="stylesheet" href="/static/RadioButton.css"/>
            <style>{`
                body {
                    margin : 0;
                }
                h1,p , label {
                    margin : 0;
                    padding : 0;
                    font-family : Prompt ;
                }
            `}</style>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument