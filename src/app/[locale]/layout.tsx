import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '../ui/globals.css';
import { useTranslations } from 'next-intl';
import Script from 'next/script';
import { getTranslations } from 'next-intl/server';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations('meta');

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations('meta');

  return (
    <html lang={t('lang')} className='scroll-smooth'>
      <head>
        <Script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-F8X0TZPMRL'
        ></Script>
        <Script id='google-analytics'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-F8X0TZPMRL');
        `}
        </Script>
        {/* <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="Inflot"/> */}
        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image'></meta>
        <meta name='twitter:title' content={t('title')}></meta>
        <meta name='twitter:description' content={t('description')}></meta>
        <meta name='twitter:image' content='https://inflot.ru/card.jpg'></meta>
        {/* <meta http-equiv='x-ua-compatible' content='ie=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' /> */}

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
