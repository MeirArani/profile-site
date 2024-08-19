import Image from "next/image"

export function FallbackVideo(props) { 
  return (

    <div className="relative flex flex-col items-center -ml-6 md:-ml-4 w-screen my-4" dangerouslySetInnerHTML={{ __html: `
      <video
        loop
        muted
        autoplay
        playsinline
        src="${props.location}"
        class="w-full ${props.className}"
        poster="${props.fallback.src}"
      >
        <Image
          src="${props.fallback}"
          alt="Fallback image for element. Check your browser's video support!"
        ></Image>
      </video>
      <p class="mx-4 prose prose-gray text-sm text-center mt-1">${props.caption != null ? props.caption : ""}</p>
    ` }}></div>
  )
}