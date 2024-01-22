import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta content='' name='keywords' />
        <meta content='' name='description' />
        <link rel='preconnect' href='https://fonts.googleapis.com'></link>
        <link rel='preconnect' href='https://fonts.gstatic.com'></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Katibeh&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;0,800;1,100;1,300;1,400;1,500;1,700;1,800&display=swap'
          rel='stylesheet'
        ></link>
        {/* <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&family=Pacifico&display=swap" rel="stylesheet"></link> */}
        <link
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css'
          rel='stylesheet'
        />
      </Head>
        
      <body>
        <Main />
        <NextScript />

      </body>
    </Html>
  );
}
