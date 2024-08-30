import Image from "next/image"

export function Photo(props) 
{
    return (
        <div className="flex flex-col items-center">
                <Image
                    alt={props.title}
                    src={props.src}
                    priority={props.isTop}
                    className="rounded-md object-cover"
                />
                <div className="flex flex-col items-center">
                    <h2 className="mt-2 text-2xl"><b>{props.series != null ? props.series : ""}</b></h2>
                    <h2 className="-mt-1 text-xl tracking-tighter text-center mb-6"><i>{props.title}</i></h2>
                </div>         
            </div>
    )
}