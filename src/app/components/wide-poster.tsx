import Image from "next/image"

export function FullBanner(props) { 
  return (
    <div className="relative mt-1 mb-2 h-52 bg-slate-300">
      <Image 
          {...props}
      ></Image>                                     
    </div>
  )
}