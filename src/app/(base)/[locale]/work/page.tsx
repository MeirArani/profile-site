'use client'
import Image from "next/image";
import profileImg from '@/public/failgirl.webp'
import {useTranslations} from 'next-intl';
import Link from "next/link";
export const dynamic = 'force-dynamic'
export const runtime = 'edge';

export default function Page({params: locale}) {
  const t = useTranslations('Work');
  return (
    
    <section>
      <div className="flex flex-row justify-center w-full max-h-72">
        <div className="flex flex-row justify-center content-center mb-8 items-center max-h-72">
          <div className="flex flex-col w-fit h-fit mt-1">
            <h1 className="w-fit font-medium xs:text-3xl text-4xl tracking-tighter mb-1 ml-[-1.9px]">{t('Card.name')}</h1>
            <div className="w-fit xs:text-base text-lg tracking-tighter">
              <p className="-mt-1">{t('Card.location')}</p>
              <p className="-mt-1">{t('Card.job')}</p>
              <p className="-mt-1">{t('Card.uni')}</p>
            </div>
            <ul className="w-fit list-disc list-inside text-xs mt-1 mb-0.5">
              <li>{t('Card.point1')}</li>
              <li>{t('Card.point2')}</li>
              <li>{t('Card.point3')}</li>
            </ul>
            <p className="w-fit prose">
                <a href="mailto:myrrh@laughingstock.me">myrrh@laughingstock.me</a>
              </p>
          </div>
          <div className="flex flex-row aspect-square items-center h-[75%] -z-10">
            <div className="flex flex-col items-center w-full h-full">
              <Image
              src={profileImg} 
              alt="Why are you hovering over this?"
              style={{
                //objectFit: 'cover', // cover, contain, none
                width: '100%',
                height: '100%'
              }}
              className="rounded-full"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      
      
      <div className="">
        <h1 className="w-fit font-semibold text-3xl mb-1 tracking-tighter">{t('Education.header')}</h1>
        <div className="w-fit">
          <h2 className="w-fit font-medium text-2xl tracking-tighter">{t('Education.Kyushu.name')}</h2>
          <h3 className="w-fit font-medium text-xl tracking-tighter">{t('Education.Kyushu.dept')}</h3>
          <p className="w-fit text-stone-950 font-light">
            2022-2025
          </p>
          <p className="w-fit prose prose-stone">
            {t.rich('Education.Kyushu.desc', {
              kuma: (chunks) => <Link href="https://hyoka.ofc.kyushu-u.ac.jp/search/details/K002398/english.html" target="_blank">{chunks}</Link>,
              serious: (chunks) => <Link href="https://hyoka.ofc.kyushu-u.ac.jp/html/100021083_ja.html" target="_blank">{chunks}</Link>,
              CEDEC: (chunks) => <Link href="https://www.igda.jp/2024/09/07/14974/" target="_blank">{chunks}</Link>,
              igda: (chunks) => <Link href="https://www.igda.jp/" target="_blank">{chunks}</Link>
            })}   
          </p>      
        </div>
        <div>
          <h2 className="font-medium text-2xl tracking-tighter mt-5">{t('Education.OU.name')}</h2>
          <h3 className="font-medium text-xl tracking-tighter">{t('Education.OU.deg1')}</h3>
          <h3 className="font-medium text-xl  tracking-tighter">{t('Education.OU.deg2')}</h3>
          <h3 className="font-medium text-xl tracking-tighter">{t('Education.OU.deg3')}</h3>
          <p className="text-stone-950 font-light">
            2017-2021
          </p>
          <p className="prose prose-stone">
          {t.rich('Education.OU.desc', {
            scholar: (chunks) => <Link href="https://archive.is/OcOU8" target="_blank">{chunks}</Link>,
            hawes: (chunks) => <Link href="https://archive.is/Xy0yh#2020" target="_blank">{chunks}</Link>,
            research: (chunks) => <Link href="https://dblp.org/pid/234/2670.html" target="_blank">{chunks}</Link>,
            le: (chunks) => <Link href="https://archive.is/7Pnou" target="_blank">{chunks}</Link>
          })}
          </p>      
        </div>
        <div>
          <h2 className="font-medium text-2xl tracking-tighter mt-5">{t('Education.OSSM.name')}</h2>
          <p className="text-stone-950 font-light">
            2015-2017
          </p>
          <p className="prose prose-stone">
          {t.rich('Education.OSSM.desc', {
            brag1: (chunks) => <Link href="https://archive.is/pNOIr" target="_blank">{chunks}</Link>,
            brag2: (chunks) => <Link href="https://archive.is/sgOFC" target="_blank">{chunks}</Link>,
            hefner: (chunks) => <Link href="https://archive.is/MVGBO#hefner-scholars-ossm-2016" target="_blank">{chunks}</Link>,
            foundation: (chunks) => <Link href="https://hefnerfoundation.org/" target="_blank">{chunks}</Link>
          })}
          </p>      
        </div>
      </div>

      <hr className="my-4 border-neutral-100"></hr>
      <div>
        <h1 className="font-semibold text-3xl mb-1 tracking-tighter">{t('Employment.header')}</h1>
        <div>  
          <h2 className="font-medium text-2xl tracking-tighter">{t('Employment.Nikken.name')}</h2>
          <h3 className="font-medium text-xl tracking-tighter">{t.rich("Employment.Nikken.title", {
            i: (chunks) => <i>{chunks}</i>
          })}</h3>
          <p className="text-stone-950 font-light">
            2022
          </p>
          <p className="text-stone-950 text-sm font-bold">
            {t('Employment.Nikken.skills')}
          </p> 
          <p className="prose prose-stone">
            {t.rich('Employment.Nikken.desc', {
              tenjin: (chunks) => <Link href="/games" target="_blank">{chunks}</Link>,
              nikken: (chunks) => <Link href="https://www.nikken.co.jp/en/" target="_blank">{chunks}</Link>,
              event: (chunks) => <Link href="https://built.itmedia.co.jp/bt/articles/2301/30/news178_2.html" target="_blank">{chunks}</Link>,
              i: (chunks) => <i>{chunks}</i>
            })}
          </p>     
        </div>
        <div>
          <h2 className="font-medium text-2xl tracking-tighter mt-5">{t('Employment.NextThought.name')}</h2>
          <h3 className="font-medium text-xl tracking-tighter">{t('Employment.NextThought.title')}</h3>
          <p className="text-stone-950 font-light">
            2017-2021
          </p>
          <p className="text-stone-950 text-sm font-bold">
          {t('Employment.NextThought.skills')}
          </p> 
          <p className="prose prose-stone">
            {t.rich("Employment.NextThought.desc", {
              nt: (chunks) => <Link href="https://www.nextthought.com/" target="_blank">{chunks}</Link>
            })}
          </p>      
        </div>
      </div>

      <hr className="my-4 border-neutral-100"></hr>
      <div>          
        <h1 className="font-semibold text-3xl mb-1 tracking-tighter">{t('Expertise.header')}</h1>
        <div>
          <h2 className="font-medium text-2xl tracking-tighter">{t('Expertise.Programming.name')}</h2>
          <ul className="list-disc list-outside ml-4">
            <li>{t('Expertise.Programming.desc1')}
              <ul className="list-disc list-inside ml-4">
                <li>{t("Expertise.Programming.desc2")}</li>
              </ul>
            </li>
            <li>{t("Expertise.Programming.desc3")}</li>
          </ul>
        </div>
        <div>
          <h2 className="font-medium text-2xl tracking-tighter">{t('Expertise.Japanese.name')}</h2>
          <ul className="list-disc list-outside ml-4">
            <li>{t.rich("Expertise.Japanese.desc1", {
              b: (chunks) => <b>{chunks}</b>
            })}</li>
            <li>{t("Expertise.Japanese.desc2")}</li>
            <li>{t("Expertise.Japanese.desc3")}</li>
          </ul>
        </div>
        <div>
          <h2 className="font-medium text-2xl tracking-tighter">{t("Expertise.Art.name")}</h2>
          <ul className="list-disc list-outside ml-4">
            <li>{t("Expertise.Art.desc1")}</li>
          </ul>
        </div>
      </div>


        
        
        
    </section>
  );
}
