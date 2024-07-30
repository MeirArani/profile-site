import Image from "next/image";
import profileImg from '../../public/me_work.webp'
import tenjinBackground from '../../public/games/tenjin/tenjin_background.webp'
import tenjinText from '../../public/games/tenjin_text_placeholder.png'

import {reggaeOne} from '../utils/fonts'


export default function Page() {
  return (
    <section>
        <h1 className="text-5xl">Games</h1>
        <div>
            <h2 className="font-light text-3xl">Completed Projects</h2>
            <div>
                <h3 className="font font-light text-5xl mt-3 mb-1"><i>Tenjin Dash</i></h3>
                <a href='/games/tenjin' className="block">
                <div className="relative mt-1 mb-2 w-screen h-52 bg-slate-300 ml-[-1.5rem]">
                    <Image 
                        src={tenjinBackground} 
                        alt="Ocean Suite album art"
                        fill
                        className="w-full h-full object-cover blur-[2px]"
                    ></Image>

                    
                        <div className={`relative ${reggaeOne.className} absolute text-5xl text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-clip-text text-transparent`}>
                            <h2 className="block bg-gradient-to-br from-cyan-300  to-pink-300 z-10 from-50% bg-clip-text text-transparent">
                                天神
                                <br />
                                <span>ダッシュ</span>
                            </h2>
                            <h2 className="absolute bg-gradient-to-br from-cyan-500  to-pink-600 from-50% bg-clip-text text-transparent -z-10 top-0 right-[-7px] w-[105%] h-[105%] content-center">
                                天神
                                <br />
                                <span>ダッシュ</span>
                            </h2>
                            <h2 className="absolute top-[12px] left-[4px] w-full h-full -inset-1 bg-gradient-to-br from-cyan-500  to-pink-600 from-60% bg-clip-text text-transparent opacity-[.70] blur -z-20">
                                天神
                                <br />
                                <span>ダッシュ</span>
                            </h2>
                        </div>                                     
                </div>
                </a>

                
                <h4 className="prose prose-gray">A race through the streets of Tenjin where you are the controller. Inspired by exercise-oriented game design of <i>World Class Track Meet</i> and <i>Wii Fit</i>.</h4>
            </div>
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
