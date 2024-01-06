import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '../ui/globals.css';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations('meta');

  return (
    <html lang={t('lang')} className='scroll-smooth'>
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
        <meta name='twitter:title' content={t('title')}></meta>
        <meta name='twitter:description' content={t('description')}></meta>
        <meta name='twitter:image' content='https://inflot.ru/card.jpg'></meta>

        {/* OG */}
        <meta property='og:type' content='website'></meta>
        <meta property='og:title' content={t('title')}></meta>
        <meta property='og:description' content={t('description')}></meta>
        <meta property='og:url' content='https://inflot.ru'></meta>
        <meta property='og:image' content='https://inflot.ru/card.jpg'></meta>
        <meta property='og:image:alt' content={t('description')}></meta>
        <meta property='og:locale' content={t('lang')}></meta>
        <meta property='og:site_name' content={t('title')}></meta>
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
