import Image, { StaticImageData } from "next/image"

export function FallbackImage(props) { 
    return (
          <Image
            src={props.fallback as StaticImageData}
            alt="Fallback image for element. Check your browser's video support!"
          ></Image>
    )
  }