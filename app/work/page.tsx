import Image from "next/image";
import profileImg from '../../public/me_work.webp'

export default function Page() {
  return (
    <section>
      <div className="flex flex-row w-full h-48">
        <div className="flex flex-col w-full pl-2 mt-1">
          <h1 className="font-medium text-4xl tracking-tighter mb-1 ml-[-1.9px]">Meir Arani</h1>
          <div className="text-sm">
            <p className="">Fukuoka, Japan</p>
            <p>Graduate Student</p>
            <p className="">Kyushu University</p>
          </div>
          <ul className="list-disc list-inside text-xs mt-1 mb-0.5">
            <li>Game Design</li>
            <li>Art</li>
            <li>Programming</li>
          </ul>
          <p className="prose">
              <a href="mailto:myrrh@laughingstock.me">myrrh@laughingstock.me</a>
            </p>
        </div>
        <div className="flex flex-row items-center -ml-4.5">
          <div className="flex flex-col items-center">
            <Image
            src={profileImg} 
            alt="Why are you hovering over this?"
            style={{
              //objectFit: 'cover', // cover, contain, none
              width: '100%',
              height: 'auto'
            }}
            className="rounded-full"
            ></Image>
          </div>
        </div>
        
      </div>
      
        <hr className="my-6 border-neutral-100"></hr>
        <h2 className="font-medium text-xl mb-1 tracking-tighter">First Thing</h2>
        <p className="text-neutral-600 text-sm">
          Byline
        </p>
        <p>
          First actual description
        </p>      
    </section>
  );
}
