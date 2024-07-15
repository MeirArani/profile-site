import Image from "next/image";

export default function Page() {
  return (
    <section className="flex flex-col content-center">
      <h1 className="font-medium text-2xl mb-4 tracking-tighter">Hi. I'm Meir</h1>
      <div className="relative aspect-[3/2] mb-4 lg:-w-2/4">
        <Image  
      src="/me_square.webp" 
      fill
      alt="Test"
      style={{
        objectFit: 'cover', // cover, contain, none
      }}
      className="rounded-md"
      ></Image>
      </div>
      
      <p className="prose prose-neutral dark:prose-invert">
        I'm a graduate student at Kyushu University, artist, and aspiring game designer.
        I develop games, compose music, write stories, and shoot film. I've written screenplays and once taught a AI to write a script (before it was hip!).
      </p>
    </section>
  );
}
