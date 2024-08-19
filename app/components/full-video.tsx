import Image from "next/image"

export function FallbackVideo(props) { 
  return (
    <div className="relative flex flex-col items-center -ml-6 md:-ml-4 w-screen my-4">
      <video autoPlay muted loop preload="none" className="w-full">
        <source src={props.location} type="video/webm" />
        <Image
          src={props.fallback}
          alt="Fallback image for element. Check your browser's video support!"
        ></Image>
      </video>
      <p className="mx-4 prose prose-gray text-sm text-center mt-1">{props.caption}</p>
    </div>
  )
}