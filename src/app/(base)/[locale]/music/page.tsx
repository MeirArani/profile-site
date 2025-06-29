('');
import Image from 'next/image';
import oceanSuite from '@/public/music/ocean_suite/folder.webp';
import waiting from '@/public/music/waiting/waiting.webp';
import contrition from '@/public/music/contrition/cover.webp';

//import dynamic from 'next/dynamic'
import { AudioPlayer } from 'react-audio-player-component';
import { useTranslations } from 'next-intl';

/*const AudioPlayer = dynamic(() => import('react-audio-player-component').then((mod) => mod.AudioPlayer), {
   ssr: false,
 
 })*/
const OceanPlayer = () => (
  <AudioPlayer
    src="/music/ocean_suite/02-Crimson_Blue.mp3"
    minimal={true}
    width={325}
    trackHeight={25}
    volume={1}
    visualise={true}
    backgroundColor="#c3f3fa"
    barColor="#1ca7bd"
    barPlayedColor="#fb038e"
  />
);

const WaitingPlayer = () => (
  <AudioPlayer
    src="/music/waiting/The_Way_Back.mp3"
    minimal={true}
    width={325}
    trackHeight={25}
    volume={1}
    visualise={true}
    backgroundColor="#b047fb"
    barColor="#0f42e4"
    barPlayedColor="#f2e7ff"
  />
);

const RitualPlayer = () => (
  <AudioPlayer
    src="/music/contrition/Silence.mp3"
    minimal={true}
    width={325}
    trackHeight={25}
    volume={0.8}
    visualise={true}
    backgroundColor="#646763"
    barColor="#3b3536"
    barPlayedColor="#adaeae"
  />
);

export default function Page({ params: locale }) {
  const t = useTranslations('Music');
  return (
    <section>
      <div className="flex flex-col">
        <h1 className="font-medium text-5xl tracking-tighter mb-1">Music</h1>
        <div>
          <h2 className="font text-4xl mb-6">Albums</h2>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
            <div className="flex flex-col items-center w-fit justify-self-center">
              <h3 className="font font-light text-4xl">
                <i>Ocean Suite</i>
              </h3>
              <h4 className="">Electronic/Ambient</h4>
              <h5 className="mb-2 text-sm">2020</h5>
              <Image
                src={oceanSuite}
                alt="Ocean Suite album art"
                className="w-80 mb-1"
              ></Image>
              <h5 className="text-lg">
                <i>Crimson Blue</i>
              </h5>
              <div>
                <OceanPlayer></OceanPlayer>
              </div>
            </div>
            <div className="flex flex-col items-center w-fit justify-self-center">
              <div className="flex flex-col items-center">
                <h3 className="font font-light text-4xl ">
                  <i>The Waiting</i>
                </h3>
                <h4 className="">Rock/Experimental</h4>
                <h5 className="mb-2 text-sm">2022</h5>
              </div>

              <Image
                src={waiting}
                alt="Thw Waiting album art"
                className="w-80 mb-1"
              ></Image>
              <h5 className="text-lg">
                <i>The Way Back</i>
              </h5>
              <div>
                <WaitingPlayer></WaitingPlayer>
              </div>
            </div>
            <div className="flex flex-col items-center w-fit justify-self-center">
              <h3 className="font font-light text-4xl">
                <i>Ritual Contrition</i>
              </h3>
              <h4 className="">Folk/Experimental</h4>
              <h5 className="mb-2 text-sm">2024</h5>
              <Image
                src={contrition}
                alt="Ritual Contrition album art"
                className="w-80 mb-1"
              ></Image>
              <h5 className="text-lg">
                <i>Silence</i>
              </h5>
              <div>
                <RitualPlayer></RitualPlayer>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
