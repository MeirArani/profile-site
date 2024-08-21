import Image from "next/image";
import multiples from '../../../public/photos/multiples1.webp'
import gotterdam from '../../../public/photos/scott.webp'
import blue from '../../../public/photos/blue.webp'
import hanami1 from '../../../public/photos/hanami1.webp'
import hanami2 from '../../../public/photos/hanami2.webp'
import hanami3 from '../../../public/photos/hanami3.webp'
import man from '../../../public/photos/man.webp'
import overexpose from '../../../public/photos/overexpose.webp'
import parco from '../../../public/photos/parco.webp'
import wish from '../../../public/photos/wish.webp'
import inu from '../../../public/photos/inu.webp'
import {unstable_setRequestLocale} from 'next-intl/server';

export default function Page({params: locale}) {
    unstable_setRequestLocale(locale);
  return (
    <section>
        <h1 className="font-medium text-5xl tracking-tighter mb-8">Photography</h1>
        <div className="flex flex-col flex-wrap justify-center gap-4 sm:mx-12 md:mx-16 lg:mx-80">
            <div className="flex flex-col items-center">
                <Image
                    alt="Scott Am Gotterdammerung"
                    src={gotterdam}
                    priority
                    className="rounded-md object-cover"
                />
                <div className="flex flex-col items-center">
                    <h2 className="mt-1 text-xl font-light"><b>No Man's Land</b></h2>
                    <h2 className="-mt-1 text-xl font-light text-center"><i>Scott Am Götterdämmerung</i></h2>
                </div>         
            </div>
            <div className="flex flex-col items-center">
                <Image
                    alt="Wish Fulfillment"
                    src={wish}
                    priority
                    className="rounded-md object-cover"
                />
                <div className="flex flex-col items-center">
                    <h2 className="mt-1 text-xl font-light"><b>Discomfort</b></h2>
                    <h2 className="-mt-1 text-xl font-light"><i>Wish Fulfillment</i></h2>
                </div>         
            </div>
            <div className="flex flex-col items-center">
                <Image
                    alt="Love, Hanami: "
                    src={hanami1}
                    
                    className="rounded-md object-cover"
                />
                <div className="flex flex-col items-center">
                    <h2 className="mt-1 text-xl font-light"><b>Love, Hanami</b></h2>
                    <h2 className="-mt-1 text-xl font-light text-center"><i>Untitled</i></h2>
                </div>         
            </div>
            <div className="flex flex-col items-center">
                <Image
                    alt="Love, Hanami: Daydream "
                    src={hanami2}
                    
                    className="rounded-md object-cover"
                />
                <div className="flex flex-col items-center">
                    <h2 className="mt-1 text-xl font-light"><b>Love, Hanami</b></h2>
                    <h2 className="-mt-1 text-xl font-light text-center"><i>Daydream</i></h2>
                </div>         
            </div>
            <div className="flex flex-col items-center">
                <Image
                    alt="Love, Hanami: Rumors"
                    src={hanami3}
                    
                    className="rounded-md object-cover"
                />
                <div className="flex flex-col items-center">
                    <h2 className="mt-1 text-xl font-light"><b>Love, Hanami</b></h2>
                    <h2 className="-mt-1 text-xl font-light text-center"><i>Rumors</i></h2>
                </div>         
            </div>
            <div className="flex flex-col items-center">
                <Image
                    alt="Love, Hanami: A Love so Blue"
                    src={blue}
                    
                    className="rounded-md object-cover"
                />
                <div className="flex flex-col items-center">
                    <h2 className="mt-1 text-xl font-light"><b>Love, Hanami</b></h2>
                    <h2 className="-mt-1 text-xl font-light text-center"><i>A Love So Blue</i></h2>
                </div>         
            </div>
            <div className="flex flex-col items-center">
                <Image
                    alt="?: A Man, A City"
                    src={man}
                    
                    className="rounded-md object-cover"
                />
                <div className="flex flex-col items-center">
                    <h2 className="mt-1 text-xl font-light"><b>?</b></h2>
                    <h2 className="-mt-1 text-xl font-light text-center"><i>A Man, A City</i></h2>
                </div>         
            </div>
            <div className="flex flex-col items-center">
                <Image
                    alt="?: Loyal Dog / Stray Dog"
                    src={inu}
                    
                    className="rounded-md object-cover"
                />
                <div className="flex flex-col items-center">
                    <h2 className="mt-1 text-xl font-light"><b>?</b></h2>
                    <h2 className="-mt-1 text-xl font-light text-center"><i>Loyal Dog / Stray Dog</i></h2>
                </div>         
            </div>
            <div className="flex flex-col items-center">
                <Image
                    alt="?: Parco: Tower of the Gods"
                    src={parco}
                    
                    className="rounded-md object-cover"
                />
                <div className="flex flex-col items-center">
                    <h2 className="mt-1 text-xl font-light"><b>?</b></h2>
                    <h2 className="-mt-1 text-xl font-light text-center"><i>Parco: Tower of the Gods</i></h2>
                </div>         
            </div>
            <div className="flex flex-col items-center">
                <Image
                    alt="Discomfort: Overexpose / Underexpose"
                    src={overexpose}
                    
                    className="rounded-md object-cover"
                />
                <div className="flex flex-col items-center">
                    <h2 className="mt-1 text-xl font-light"><b>Discomfort</b></h2>
                    <h2 className="-mt-1 text-xl font-light text-center"><i>Overexpose / Underexpose</i></h2>
                </div>         
            </div>
            <div className="flex flex-col items-center">
                <Image
                    alt="Discomfort: Multiples"
                    src={multiples}
                    
                    className="rounded-md object-cover"
                />
                <div className="flex flex-col items-center">
                    <h2 className="mt-1 text-xl font-light"><b>Discomfort</b></h2>
                    <h2 className="-mt-1 text-xl font-light text-center"><i>Multiples</i></h2>
                </div>
            </div>
        </div>
        
        
        
        
        
        

    </section>
  );
}
