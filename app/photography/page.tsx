import Image from "next/image";
import multiples from '../../public/me_square.webp'
import gotterdam from '../../public/Scott Am Götterdämmerung.webp'
export default function Page() {
  return (
    <section>
        <h1 className="font-medium text-5xl tracking-tighter mb-8">Photography</h1>
        <div className="grid grid-cols-1 grid-rows-4 gap-3 my-4">
            <div className="flex flex-col items-center">
                <Image
                    alt="Multiples"
                    src={multiples}
                    
                    className="rounded-md object-cover"
                />
                <h2 className="mt-2 text-xl font-light"><i>Multiples</i></h2>
            </div>
            <div className="flex flex-col items-center">
                <Image
                    alt="Scott Am Gotterdammerung"
                    src={gotterdam}
                    
                    className="rounded-md object-cover"
                />
                <div className="flex flex-col items-center">
                    <h2 className="mt-2 text-xl font-light"><b>No Man's Land</b></h2>
                    <h2 className="-mt-1 text-xl font-light text-center"><i>Scott Am Götterdämmerung</i></h2>
                </div>
                
            </div>
             
        </div>
        
        
        
        
        
        

    </section>
  );
}
