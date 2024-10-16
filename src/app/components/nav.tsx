import { useTranslations } from 'next-intl';
import {Link} from '../../i18n/routing';
import LocaleSwitcher from './locale-switcher';

export function Navbar() {
  const t = useTranslations("Nav");
  const navItems = {
    '/': {
      name: t('home'),
    },
    '/work': {
      name: t('work'),
    },
    '/games': {
      name: t('games'),
    },
    '/photography': {
      name: t('photo'),
    },
    '/music': {
      name: t('music'),
    },
  };
  
  return (
    <aside className="-ml-[8px] mb-5 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 min-w-full justify-between text-sm">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
                >
                  {name}
                </Link>
              );
            })}
            <LocaleSwitcher className=""></LocaleSwitcher>
          </div>
        </nav>
      </div>
    </aside>
  );
}
