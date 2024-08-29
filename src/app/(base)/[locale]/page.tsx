'use client'
import desktopImage from '@/public/photos/multiples1.webp'
import mobileImage from '@/public/hanami.webp'
import {ResponsiveImage} from '@/components/responsive-image'
import {useTranslations} from 'next-intl';
import { ArrowIcon } from "@/components/arrow-icon";
import Link from 'next/link';
export const dynamic = 'force-dynamic'
export const runtime = 'edge';

export default function Page({params: locale}) {
  const t = useTranslations('Home');
    return (
        <section className="flex flex-col items-center">
      <h1 className="font-medium text-4xl tracking-tighter text-center w-fit">{t('greeting')}</h1>
      <div className="my-4 md:w-[90%] lg:w-[75%] xl:w-[50%]">
        <ResponsiveImage  
        srcDesktop={desktopImage}
        srcMobile={mobileImage} 
        alt="Hi."
        style={{
          //objectFit: 'cover', // cover, contain, none
          width: '100%',
          height: 'auto'
        }}
        placeholder="blur"
        className="rounded-lg"
        classnamedesktop="w-full"
        classnamemobile="w-full"
        ></ResponsiveImage>
      </div>
      <h1 className="font-medium text-3xl mb-4 tracking-tighter text-center w-fit">{t('followUp')}</h1>
      
      <div>
        <p className="prose prose-2xlg mb-2">
          {t.rich('intro', {
            games: (chunks) => <Link href="/games">{chunks}</Link>,
            photos: (chunks) => <Link href="/photography">{chunks}</Link>,
            music: (chunks) => <Link href="/music">{chunks}</Link>,
            tenjin: (chunks) => <Link href="/games/tenjin">{chunks}</Link>,
            hommer: (chunks) => <Link href="https://youtu.be/tx22WrInPYY?t=6602" target="_blank">{chunks}</Link>,
            work: (chunks) => <Link href="/work">{chunks}</Link>,
            em: () => "&mdash;"
          })}
        </p>
      </div>
      
      <ul className="font-sm w-full mt-5 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300 md:w-fit">
        <li>
            <a 
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/mappingthestatic/"
            >
            <ArrowIcon />
            <p className="ml-2 h-7">follow me</p>
          </a>
        </li>
      </ul>
    </section>

    );
}