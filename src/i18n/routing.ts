import {createSharedPathnamesNavigation} from 'next-intl/navigation';
import {locales, /* ... */} from './config';
import {defineRouting} from 'next-intl/routing';


export const routing = defineRouting({
  locales: ['en', 'ja'],
  defaultLocale: 'en',
});

export type Locale = (typeof routing.locales)[number];
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales, /* ... */});