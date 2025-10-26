import createMiddleware from 'next-intl/middleware';
import { locales } from './config';

export default createMiddleware({
  locales,
  defaultLocale: 'ru',
  localeDetection: false,
  localePrefix: 'as-needed',
});

export const config = {
  matcher: [`/((?!_next|static|public|fonts|audio|icons|images|meta|videos|logo.png|logo-white.png|og.png|next.svg|manifest.webmanifest|robots.txt|.nojekyll|tableau.json|sitemap.xml).*)`],
};
