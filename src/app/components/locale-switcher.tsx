'use client';

import { useParams } from 'next/navigation';
import { ChangeEvent, ReactNode, useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
import React from 'react';
import { useLocale } from 'next-intl';

type Props = {
  className;
};

export default function LocaleSwitcher({ className }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  let currentLocale = useLocale();
  let nextLocale = currentLocale == 'en' ? 'ja' : 'en';
  const [isPending, startTransition] = useTransition();

  function swapLocaleValue() {
    currentLocale == 'en' ? (nextLocale = 'ja') : (nextLocale = 'en');
    console.log(pathname);
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <button
      className={className}
      disabled={isPending}
      onClick={swapLocaleValue}
    >
      {nextLocale == 'en' ? 'ENG' : 'JP'}
    </button>
  );
}
