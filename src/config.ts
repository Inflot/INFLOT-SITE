import { Pathnames } from 'next-intl/navigation';

export const locales = ['ru', 'en', 'de', 'fr', 'no'] as const;

export const pathnames = {
  '/': '/',
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
