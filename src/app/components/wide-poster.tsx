import Image, { StaticImageData } from "next/image"
import Link from "next/link"

export function FullBanner(props) { 
  return (
    <div>
      <Link href={props.href} className="block relative w-screen">
        <div className="relative mt-1 mb-2 h-52 bg-slate-300">
            <Image 
                src={props.backgroundImg as StaticImageData} 
                alt="Tenjin Dash Background"
                fill
                className="w-full h-full object-cover blur-[2px]"
            ></Image>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            {props.logo}                                    
            </div>
          </div>
        </Link>                                   
    </div>
  )
}