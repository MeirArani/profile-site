import Image from "next/image";
import profileImg from '../../public/me_work.webp'
import oceanSuite from '../../public/music/ocean_suite/folder.png'
import tenjinText from '../../public/games/tenjin_text_placeholder.png'

export default function Page() {
  return (
    <section>
        <h1 className="font-medium text-5xl tracking-tighter mb-1">Games</h1>
        <div>
            <h2 className="font text-4xl">Completed</h2>
            <div>
                <h3 className="font font-light text-3xl"><i>Tenjin Dash</i></h3>
                <div className="relative mt-1 mb-2 w-screen h-52 bg-slate-300 ml-[-1.5rem]">
                    <Image 
                src={oceanSuite} 
                alt="Ocean Suite album art"
                fill
                className="w-full h-full object-cover"
                ></Image>
                
                <Image
                
                src={tenjinText}
                    alt="Tenjin Dash logo placeholder"
                    className="absolute w-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    
                </Image>

                </div>
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
