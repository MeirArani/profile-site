import Image from "next/image";

import {reggaeOne} from '../../utils/fonts'

export default function Page() {
  return (
    <section>
        <h1 className={`${reggaeOne.className} text-5xl mb-6`}>天神ダッシュ</h1>
        <div className="absolute right-0 width-full">
          <video autoPlay muted loop preload="none" className="w-full">
            <source src="/games/tenjin/tenjindash.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div>
        </div>
        
        <div>
        </div>
        
        
        
        
        
        

    </section>
  );
}
