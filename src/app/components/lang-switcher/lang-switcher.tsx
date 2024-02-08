'use client';

import { usePathname, useRouter } from '../navigation';
import { useTransition } from 'react';
import { useLocale } from 'next-intl';
import ReactFlagsSelect from 'react-flags-select';

import './lang-switcher.css';

export type TFunction = (key: string, values?: any, formats?: any) => string;

type LangSwitcherProps = {
  langs: Record<string, string>;
};

export default function LangSwitcher({ langs }: LangSwitcherProps) {
  const [_, startTransition] = useTransition();
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();

  const handleChange = (code: string) => {
    startTransition(() =>
      router.replace(pathname, {
        locale: code === 'GB' ? 'en' : code.toLocaleLowerCase(),
        scroll: false
      })
    );
  };

  return (
    <ReactFlagsSelect
      countries={Object.keys(langs)}
      placeholder=' '
      customLabels={{
        ...langs,
      }}
      selected={locale === 'en' ? 'GB' : locale.toUpperCase()}
      onSelect={(code) => handleChange(code)}
      showSelectedLabel={false}
      selectedSize={20}
      className={'lang-switcher'}
    />
  );
}
