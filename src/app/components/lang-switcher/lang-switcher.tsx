'use client';

import { usePathname, useRouter } from '../navigation';
import { useTransition } from 'react';
import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useLocale } from 'next-intl';
import ReactFlagsSelect from 'react-flags-select';

import './lang-switcher.css';
import '/node_modules/flag-icons/css/flag-icons.min.css';

export default function LangSwitcher() {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();

  const handleChange = (code: string) => {
    startTransition(() =>
      router.replace(pathname, {
        locale: code === 'US' ? 'en' : code.toLocaleLowerCase(),
      } as NavigateOptions)
    );
  };

  return (
    <ReactFlagsSelect
      countries={['RU', 'US', 'DE', 'NO']}
      placeholder=' '
      selected={locale === 'en' ? 'US' : locale.toUpperCase()}
      onSelect={(code) => handleChange(code)}
      showSelectedLabel={false}
      selectedSize={20}
      className={'lang-switcher'}
    />
  );
}
