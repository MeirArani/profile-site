'use client'
import Image from "next/image";
import { AudioPlayer } from 'react-audio-player-component';
import oceanSuite from '../../public/music/ocean_suite/folder.png'


const Player = () => (
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

export default function Page() {
  return (
    <section>
      <div className="flex flex-col">
        <h1 className="font-medium text-5xl tracking-tighter mb-1">Music</h1>
        <div>
          <h2 className="font text-4xl mb-6">Albums</h2>
          <div className="flex flex-col items-center">
            <h3 className="font font-light text-4xl"><i>Ocean Suite</i></h3>
            <h4 className="">Electronic/Ambient</h4>
            <h5 className="mb-2 text-sm">2020</h5>
            <Image 
            src={oceanSuite} 
            alt="Ocean Suite album art"
            className="w-3/4 mb-4"
            ></Image>
            <div><Player></Player></div>
            
          </div>
        </div>
        <div>
          <h2 className="font text-4xl mt-6 mb-6">Demos</h2>
          <div className="flex flex-col items-center">
            <h3 className="font font-light text-4xl"><i>Ocean Suite</i></h3>
            <h4 className="">Electronic/Ambient</h4>
            <h5 className="mb-2 text-sm">2020</h5>
            <Image 
            src={oceanSuite} 
            alt="Ocean Suite album art"
            className="w-3/4 mb-4"
            ></Image>
            <div><Player></Player></div>
            
          </div>
        </div>
      </div>
        
        
        
    </section>

  );
}
