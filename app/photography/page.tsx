import Image from "next/image";
import profileImg from '../../public/me_square.webp'
export default function Page() {
  return (
    <section>
        <h1 className="font-medium text-5xl tracking-tighter mb-8">Photography</h1>
        <div className="grid grid-cols-1 grid-rows-4 gap-4 my-8">
            <div className="flex flex-col items-center">
                <Image
                    alt="Multiples"
                    src={profileImg}
                    
                    className="rounded-md object-cover"
                />
                <h2 className="mt-2 text-xl font-light"><i>Multiples</i></h2>
            </div>
             
        </div>
        
        
        
        
        
        

    </section>
  );
}
