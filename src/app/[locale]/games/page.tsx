'use client'

import tenjinBackground from '@/public/games/tenjin/tenjin_background.webp'
import { TenjinLogo } from '@/components/logos';
import { FullBanner } from '@/components/wide-poster';
import {useTranslations} from 'next-intl';


export const dynamic = 'force-dynamic'
export const runtime = 'edge';

export default function Page({params: locale}) {
    const t = useTranslations('Games');
    return (
        <section>
        <h1 className="text-5xl">Games</h1>
        <div>
            <h2 className="font-light text-3xl">Completed Projects</h2>
            <FullBanner href="/games/tenjin" backgroundImg={tenjinBackground} logo={<TenjinLogo/>} title="Tenjin"></FullBanner>
        </div>
        <div>
            <h2 className="font text-4xl">Prototypes</h2>
            <div>
                <h3 className="font font-light text-3xl"><i>Enemy Zero</i></h3>
                <h3 className="font font-light text-3xl"><i>Beauty</i></h3>
            </div>
        </div>
        <div>
            <h2 className="font text-4xl">Concepts</h2>
            <div>
                <h3 className="font font-light text-3xl"><i>Grace Beneath The Pines</i></h3>
                <h3 className="font font-light text-3xl"><i>Corporate Ladder</i></h3>
                <h3 className="font font-light text-3xl"><i>Bad Houses</i></h3>
            </div>
        </div>

    </section>

  );
}
