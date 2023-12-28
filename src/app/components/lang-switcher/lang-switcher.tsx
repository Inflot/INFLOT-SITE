'use client';

import { Select, Space } from 'antd';
import { usePathname, useRouter } from '../navigation';
import { useEffect, useTransition } from 'react';
import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useLocale } from 'next-intl';
import { options } from './constants';

import './lang-switcher.css';

export default function LangSwitcher() {
  useEffect(() => {
    const isServer = typeof window === 'undefined';
    const WOW = !isServer ? require('wow.js') : null;
    new WOW({
      mobile: false,
    }).init();
  });

  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();

  const handleChange = (value: string) => {
    startTransition(() =>
      router.replace(pathname, { locale: value } as NavigateOptions)
    );
  };

  return (
    <Select
      size={'large'}
      suffixIcon={null}
      bordered={false}
      defaultValue={locale}
      className='select-lang'
      style={{ width: '100%' }}
      placeholder='select one country'
      onChange={handleChange}
      optionLabelProp='label'
      options={options}
      popupMatchSelectWidth={150}
      optionRender={(option) => (
        <Space>
          <span role='img' aria-label={option.data.label}>
            {option.data.emoji}
          </span>
          {option.data.desc}
        </Space>
      )}
    />
  );
}
