import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '../ui/globals.css';
import { useTranslations } from 'next-intl';
import Script from 'next/script';
import { getTranslations } from 'next-intl/server';

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
        <link
          rel='search'
          type='application/opensearchdescription+xml'
          href={`/opensearch_${t('lang')}.xml`}
          title={t('title')}
        />
        <meta
          httpEquiv='Last-Modified'
          content='Sun, 11 Feb 2024 12:45:26 GMT'
        ></meta>
        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={t('title')} />
        <meta name='twitter:description' content={t('description')} />
        <meta name='twitter:image' content='https://inflot.com/logo.png' />
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
        <meta property='og:image' content='https://inflot.com/logo.png' />
        <meta property='og:image:alt' content={t('description')} />
        <meta property='og:locale' content={t('lang')} />
        <meta property='og:site_name' content={t('title')} />
      </head>

      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
