'use client';

import {useParams} from 'next/navigation';
import {ChangeEvent, ReactNode, useTransition} from 'react';
import {Locale, usePathname, useRouter} from '@/i18n/routing';
import React from 'react';
import { useLocale } from "next-intl";

type Props = {
    className
};

export default function LocaleSwitcher({
    className
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  let currentLocale = useLocale();
  let nextLocale = currentLocale == "en" ? "ja" : "en";

  function swapLocaleValue()
  {
    currentLocale == "en" ? nextLocale = "ja" : nextLocale = "en";
    console.log(pathname);
    startTransition(() => {
        router.replace(pathname, {locale: nextLocale as Locale});
      });
  }

  return (
      <button
        className={className}
        disabled={isPending}
        onClick={swapLocaleValue}
      >
        {nextLocale == "en" ? "ENG" : "JP"}
      </button>
  );
}