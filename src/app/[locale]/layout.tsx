import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '../ui/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Maritime agency «Inflot»',
  description: `Maritime agency «Inflot»`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru' className='scroll-smooth'>
      <head>
        {/* <Script
          async
          src='https://www.googletagmanager.com/gtag/js?id=null'
        ></Script>
        <Script id='google-analytics'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'null');
        `}
        </Script> */}
        {/* <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="Inflot"/> */}
        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image'></meta>
        <meta name='twitter:title' content='Maritime agency «Inflot»'></meta>
        <meta
          name='twitter:description'
          content='Maritime agency «Inflot»'
        ></meta>
        <meta name='twitter:image' content='https://inflot.ru/card.jpg'></meta>

        {/* OG */}
        <meta property='og:type' content='website'></meta>
        <meta property='og:title' content='Maritime agency «Inflot»'></meta>
        <meta
          property='og:description'
          content='Maritime agency «Inflot»'
        ></meta>
        <meta property='og:url' content='https://inflot.ru'></meta>
        <meta property='og:image' content='https://inflot.ru/card.jpg'></meta>
        <meta property='og:image:alt' content='Maritime agency «Inflot»'></meta>
        <meta property='og:locale' content='en_US'></meta>
        <meta property='og:site_name' content='Inflot'></meta>
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
