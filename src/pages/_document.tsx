import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="description" content="Use um pomodoro para aumentar sua produtividade e foco, e quando o timer acabar faça os desafios para ganhar xp e subir de level." />
            <meta name="keywords" content="pomodoro, moveit, move.it, vercel, rocketseat, rocketseat-nlw, rocketseat-nlw4 nlw, nlw4, nextlevelweek, nsl" />
            <meta name="author" content="Alexsander" />
            
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
      </Html>
    );
  }
}
