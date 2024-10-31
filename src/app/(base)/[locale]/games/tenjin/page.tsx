'use client'

import exhibitFallback from '@/public/games/tenjin/exhibit_fallback.webp'
import panelFallback from '@/public/games/tenjin/panel_fallback.webp'
import buggyFallback from '@/public/games/tenjin/buggy_fallback.webp'
import dinoFallback from '@/public/games/tenjin/dino_fallback.webp'
import raceFallback from '@/public/games/tenjin/race_fallback.webp'
import mainFallback from '@/public/games/tenjin/main_fallback.webp'
import { FullAV } from "@/components/full-av";
import {useTranslations} from 'next-intl';
import RichText from '@/components/rich-text';
import { Link } from '@/i18n/routing'

export const dynamic = 'force-dynamic'
export const runtime = 'edge';
export default function Page({params: locale}) {
  const t = useTranslations('Games.Tenjin');
  return (
    <section className="lg:mx-24 md:mx-16 xl:mx-72 2xl:mx-72">
        <h1 className={`font-tenjin text-5xl mb-6`}>{t("title")}</h1>
        <FullAV location="/games/tenjin/tenjindash.webm" fallback={mainFallback}></FullAV>
        <div>
          <div>
              <ul className="text-sm">
                <RichText notProse>{(tags) => t.rich("info", tags)}</RichText>
              </ul>
          </div>
          <div className="prose prose-gray">
            <h3 className="-mt-2"><RichText>{(tags) => t.rich('topline', tags)}</RichText></h3>
          </div>
          <FullAV 
              location="/games/tenjin/tenjin_race.webm" 
              fallback={raceFallback}
              caption={t("captions.race")}
            ></FullAV>
          <div className="mb-1">
            <h2 className="text-5xl mb-4">{t("background.header")}</h2>
            <h3 className="text-3xl"><RichText>{(tags) => t.rich('background.sub', tags)}</RichText></h3>
            <div className="prose prose-gray">
                <RichText>{(tags) => t.rich('background.1', tags)}</RichText>
            </div>
            <FullAV 
              location="/games/tenjin/dino_buggy.webm" 
              fallback={buggyFallback}
              caption={t("captions.buggy")}
            ></FullAV>
            <div>
              <div className="prose prose-gray mb-4">
              <RichText>{(tags) => t.rich('background.2', tags)}</RichText>
              </div>  
              <FullAV 
              location="/games/tenjin/dino_run.webm" 
              fallback={dinoFallback}
              caption={t("captions.dino")}
              ></FullAV>
              <div className="prose prose-gray mb-4">
              <RichText>{(tags) => t.rich('background.3', tags)}</RichText>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-3xl">Evolution</h3>
              <div className="prose prose-gray">
                <RichText>{(tags) => t.rich("evolution.1", tags)}</RichText>
              </div>
          </div>
          <div className="mb-4">
            <h3 className="text-3xl">{t('big.header')}</h3>
            <div className="prose prose-gray">
              <RichText>{(tags) => t.rich("big.1", tags)}</RichText>
            </div>
            <FullAV 
              location="/games/tenjin/panel.webm" 
              fallback={panelFallback}
              caption="Seeing my own game presented was an incredibly surreal sight."
              ></FullAV>
            <div className="prose prose-gray">
              <p>After a panel co-hosted by my advisor, we let the audience take the game for a spin themselves. I was out-of-my-mind with nervous energy...but overall, everyone loved it! Mission success!</p>
            </div>
            <FullAV 
              location="/games/tenjin/exhibit.webm" 
              fallback={exhibitFallback}
              caption={t('captions.exhibit')}
              className="mb-4"
              ></FullAV>
            <div>
            <h3 className="text-3xl">Aftermath</h3>
            <div className="prose prose-gray">
              <RichText>{(tags) => t.rich("aftermath.1", tags)}</RichText>
            </div>
            </div>
            
          </div>
        </div>
    </section>
  );
}
