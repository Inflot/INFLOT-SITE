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

  const JsonLd = ({ data }: { data: object }) => (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": `${t('title')}`,
    "url": "https://inflot.com"
  };

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

        {/* openSearch */}
        <link
          rel='search'
          type='application/opensearchdescription+xml'
          href={`/meta/opensearch_${t('lang')}.xml`}
          title={t('title')}
        />

        {/* favicons */}
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
        <link rel="icon" href="/icons/icon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icons/android-chrome-512x512" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="yandex-tableau-widget" href="/icons/tableau.json" />

        <JsonLd data={jsonLd} />

        {/* Last-Modified */}
        <meta
          httpEquiv='Last-Modified'
          content='Sun, 06 Dec 2024 11:25:20 GMT'
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
