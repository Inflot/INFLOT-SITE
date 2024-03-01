import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '../ui/globals.css';
import { useTranslations } from 'next-intl';
import Script from 'next/script';
import { getTranslations } from 'next-intl/server';
import Footer from '../components/footer/footer';
import HeaderSection from '../components/header-section/header-section';
import LibsLoader from '../components/libs-loader/libs-loader';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations('meta');

  return {
    title: t('title'),
    description: t('description'),
  };
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
        <meta name="google-site-verification" content="xHOU1GPAZTqSxhHcdukiA_c9PuwxFEpkNpWzm7anL-8" />
        
        {/* yandex */}
        <meta name="yandex-verification" content="09a3cabb1b3a1047" />

        {/* openSearch */}
        <link
          rel='search'
          type='application/opensearchdescription+xml'
          href={`/opensearch_${t('lang')}.xml`}
          title={t('title')}
        />

        {/* favicons */}
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png"/>
        <link rel="icon" href="/icons/favicon.ico" sizes="any"/>
        <link rel="icon" href="/icons/icon.svg" type="image/svg+xml"/> 
        <link rel="manifest" href="/manifest.webmanifest"/>
        <link rel="yandex-tableau-widget" href="/icons/tableau.json"/>

        {/* Last-Modified */}
        <meta
          httpEquiv='Last-Modified'
          content='Fri, 01 Mar 2024 11:25:20 GMT'
        ></meta>

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={t('title')} />
        <meta name='twitter:description' content={t('description')} />
        <meta name='twitter:image' content='https://inflot.com/og.png' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0'
        />
        {/* OG */}
        <meta property='og:type' content='website' />
        <meta property='og:title' content={t('title')} />
        <meta property='og:description' content={t('description')} />
        <meta property='og:url' content='https://inflot.com' />
        <meta property='og:image' content='https://inflot.com/og.png' />
        <meta property='og:image:alt' content={t('description')} />
        <meta property='og:locale' content={t('lang')} />
        <meta property='og:site_name' content={t('title')} />
      </head>

      <body className={inter.className} suppressHydrationWarning={true}>
        <LibsLoader />
        <HeaderSection />
        {children}
        <Footer />
      </body>
    </html>
  );
}
