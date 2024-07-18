import Image from "next/image";
import profileImg from '../../public/me_work.webp'

export default function Page() {
  return (
    <section>
        <h1 className="font-medium text-5xl tracking-tighter mb-1">Games</h1>
        <div>
            <h2 className="font text-4xl">Completed</h2>
            <div>
                <h3 className="font font-light text-3xl"><i>Tenjin Dash</i></h3>
            </div>
        </div>
        <div>
            <h2 className="font text-4xl">Prototypes</h2>
            <div>
                <h3 className="font font-light text-3xl"><i>Enemy Zero</i></h3>
                <h3 className="font font-light text-3xl"><i>Beauty</i></h3>
            </div>
        </div>
        <div>
            <h2 className="font text-4xl">Concepts</h2>
            <div>
                <h3 className="font font-light text-3xl"><i>Grace Beneath The Pines</i></h3>
                <h3 className="font font-light text-3xl"><i>Corporate Ladder</i></h3>
                <h3 className="font font-light text-3xl"><i>Bad Houses</i></h3>
            </div>
        </div>
        
        
        
        
        
        

    </section>
  );
}
