'use client'
import Image from "next/image";
import multiples from '@/public/photos/multiples1.webp'
import gotterdam from '@/public/photos/scott.webp'
import blue from '@/public/photos/blue.webp'
import hanami1 from '@/public/photos/hanami1.webp'
import hanami2 from '@/public/photos/hanami2.webp'
import hanami3 from '@/public/photos/hanami3.webp'
import man from '@/public/photos/man.webp'
import overexpose from '@/public/photos/overexpose.webp'
import parco from '@/public/photos/parco.webp'
import wish from '@/public/photos/wish.webp'
import inu from '@/public/photos/inu.webp'
import lives from "@/photos/lives.webp"
import grace from "@/photos/grace.webp"
import vanity from "@/photos/vanity.webp"
import sky from "@/photos/sky.webp"
import family from "@/photos/family.webp"
import light from "@/photos/light.webp"
import someday from "@/photos/someday.webp"

import {useTranslations} from 'next-intl';

import { Photo } from "@/components/photo";

export const dynamic = 'force-dynamic'
export const runtime = 'edge';

export default function Page({params: locale}) {
    const t = useTranslations('Photos');
  return (
    <section>
        <h1 className="font-medium text-5xl tracking-tighter mb-8">Photography</h1>
        <div className="flex flex-col flex-wrap justify-center gap-4 sm:mx-12 md:mx-16 lg:mx-36 2xl:mx-72">
            <h2 className="text-5xl tracking-tighter"><b>Sprawl</b></h2>
            <div>
                <Photo title="Love & Vanity" src={vanity} isTop series=""></Photo>
                <Photo title="Other People's Lives" src={lives} series=""></Photo>
                <Photo title="A Man, A City" src={man} series=""></Photo>
                <Photo title="Parco: Tower of the Gods" src={parco} series=""></Photo>
                <Photo title="Loyal Dog / Stray Dog" src={inu} series=""></Photo>
                <Photo title="Love, Hanami" src={hanami1} series=""></Photo>
                <Photo title="Rumors" src={hanami3} series=""></Photo>
                <Photo title="A Love So Blue" src={blue} series=""></Photo>
                <Photo title="Daydream" src={hanami2} series=""></Photo>
            </div>
            <h2 className="text-5xl tracking-tighter"><b>No Man's Land</b></h2>
            <div>
            <Photo title="Scott Am Götterdämmerung" src={gotterdam} series=""></Photo>
            <Photo title="sunkiss. grace" src={grace} series=""></Photo>
            <Photo title="Family Portrait" src={family} series=""></Photo>
            </div>
            <h2 className="text-5xl tracking-tighter"><b>Discomfort</b></h2>
            <div>
                <Photo title="Wish Fulfillment" src={wish} series=""></Photo>
                <Photo title="White Light From the Mouth of Infinity" src={light}></Photo>
                <Photo title="overunderexpose" src={overexpose} series=""></Photo>
                <Photo title="someday i'll be like the man on the screen." src={someday}></Photo>
                <Photo title="Multiples" src={multiples} series=""></Photo>   
            </div>
            <h2 className="text-5xl tracking-tighter"><b>&c.</b></h2>
            <div>
                <Photo title="we're only made of sky." src={sky} series=""></Photo>
            </div>

        </div>
        

    </section>
  );
}
