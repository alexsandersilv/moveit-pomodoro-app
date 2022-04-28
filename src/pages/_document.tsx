import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="description" content="Use um pomodoro para almentar sua produtividade e quando o tempo acabar faça desafios para subir de nivel" />
                    <meta name="keywords" content="Pomodoro, Move.It, Rocketseat, NLW, NLW-4, NextLevelWeek" />
                    <meta name="author" content="Alexsander" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    
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