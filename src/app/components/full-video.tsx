import Image, { StaticImageData } from "next/image"
import { FallbackImage } from "./fallback-image"
import { useInView } from "react-intersection-observer";
import React, { useRef} from 'react';

export function FallbackVideo(props) { 

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    onChange: (inView, entry) => (inView ? (entry.target as HTMLVideoElement).play().catch((e) => {}) : (entry.target as HTMLVideoElement).pause())
  });

  return (
    
    <div className="relative flex flex-col items-center -ml-6 md:-ml-4 w-screen md:w-full my-4">
      <video
        ref={ref}
        loop={inView}
        muted
        autoPlay={inView}
        playsInline
        src={props.location}
        className="w-full md:rounded-xl"
        poster={props.fallback.src}
      >
      <Image
        src={props.fallback}
        alt="Fallback image for element. Check your browser's video support!"
      ></Image>
      </video>
      <p className="mx-4 prose prose-gray text-sm text-center mt-1">{props.caption != null ? props.caption : ""}</p>
    </div>
  )
}
