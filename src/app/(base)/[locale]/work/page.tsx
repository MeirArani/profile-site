'use client'
import Image from "next/image";
import profileImg from '@/public/failgirl.webp'
import {useTranslations} from 'next-intl';
export const dynamic = 'force-dynamic'
export const runtime = 'edge';

export default function Page({params: locale}) {
  const t = useTranslations('Work');
  return (
    
    <section>
      <div className="flex flex-row justify-center w-full max-h-72">
        <div className="flex flex-row justify-center content-center mb-8 items-center max-h-72">
          <div className="flex flex-col w-fit h-fit mt-1">
            <h1 className="w-fit font-medium xs:text-3xl text-4xl tracking-tighter mb-1 ml-[-1.9px]">Meir Arani</h1>
            <div className="w-fit xs:text-base text-lg tracking-tighter">
              <p className="-mt-1">Fukuoka, Japan</p>
              <p className="-mt-1">Graduate Student</p>
              <p className="-mt-1">Kyushu University</p>
            </div>
            <ul className="w-fit list-disc list-inside text-xs mt-1 mb-0.5">
              <li>Game Design</li>
              <li>Programming</li>
              <li>Writing</li>
            </ul>
            <p className="w-fit prose">
                <a href="mailto:myrrh@laughingstock.me">myrrh@laughingstock.me</a>
              </p>
          </div>
          <div className="flex flex-row aspect-square items-center h-[75%] -z-10">
            <div className="flex flex-col items-center w-full h-full">
              <Image
              src={profileImg} 
              alt="Why are you hovering over this?"
              style={{
                //objectFit: 'cover', // cover, contain, none
                width: '100%',
                height: '100%'
              }}
              className="rounded-full"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      
      
      <div className="">
        <h1 className="w-fit font-medium font-semibold text-3xl mb-1 tracking-tighter">Education</h1>
        <div className="w-fit">
          <h2 className="w-fit font-medium text-2xl tracking-tighter">Kyushu University</h2>
          <h3 className="w-fit font-medium text-xl tracking-tighter">Graduate School of Design</h3>
          <p className="w-fit text-stone-950 font-light">
            2022-2025 (Expected)
          </p>
          <p className="w-fit prose prose-stone">
          I am currently pursuing a graduate degree in design, researching under&nbsp;
          <a href="https://hyoka.ofc.kyushu-u.ac.jp/search/details/K002398/english.html">Hiroyuki Matsuguma's</a>
          &nbsp;
          <a href="http://macma-lab.heteml.net/">serious games project.</a>     
          </p>      
        </div>
        <div>
          <h2 className="font-medium text-2xl tracking-tighter mt-5">The University of Oklahoma</h2>
          <h3 className="font-medium text-xl tracking-tighter">B.Sc. in Computer Science with Honors</h3>
          <h3 className="font-medium text-xl  tracking-tighter">B.A. in Japanese with Honors</h3>
          <h3 className="font-medium text-xl tracking-tighter">Minor in Mathematics</h3>
          <p className="text-stone-950 font-light">
            2017-2021
          </p>
          <p className="prose prose-stone">
          I was designated an&nbsp;
          <a href="https://archive.is/OcOU8">Oklahoma State Regents Scholar</a>
          &nbsp;and received the&nbsp;
          <a href="https://archive.is/Xy0yh#2020">Olive Hawes Scholarship.</a> 
          &nbsp;I also co-authored&nbsp;
          <a href="https://dblp.org/pid/234/2670.html">several research papers</a>
          &nbsp;under&nbsp;
          <a href="https://archive.is/7Pnou">Dr. Le Gruenwald.</a> 
          </p>      
        </div>
        <div>
          <h2 className="font-medium text-2xl tracking-tighter mt-5">The Oklahoma School of Science & Mathematics</h2>
          <p className="text-stone-950 font-light">
            2015-2017
          </p>
          <p className="prose prose-stone">
          I attended one of America's&nbsp;
          <a href="https://archive.is/pNOIr">most prestigious</a>&nbsp;
          <a href="https://archive.is/sgOFC">high schools</a>
          &nbsp;where I was distinguished as a&nbsp;
          <a href="https://archive.is/MVGBO#hefner-scholars-ossm-2016">Hefner Scholar</a>
          &nbsp;by the <a href="https://hefnerfoundation.org/">Robert & MeiLi Hefner Foundation.</a>
          </p>      
        </div>
      </div>

      <hr className="my-4 border-neutral-100"></hr>
      <div>
        <h1 className="font-semibold text-3xl mb-1 tracking-tighter">Employment</h1>
        <div>  
          <h2 className="font-medium text-2xl tracking-tighter">Nikken Sekkei</h2>
          <h3 className="font-medium text-xl tracking-tighter">Contracted Game Collaboration &mdash; <i>Tenjin Dash</i></h3>
          <p className="text-stone-950 font-light">
            2022
          </p>
          <p className="text-stone-950 text-sm font-bold">
            C#, Unity, Game Design
          </p> 
          <p className="prose prose-stone">
          I developed&nbsp;
          <a href="/games"><i>Tenjin Dash</i></a> 
          &nbsp;for&nbsp;
          <a href="https://www.nikken.co.jp/en/">Nikken Sekkei's</a>
          &nbsp;2022 event <a href="https://built.itmedia.co.jp/bt/articles/2301/30/news178_2.html">都市DXフォーラム IN 九州.</a>
          &nbsp;The collaboration was performed under the guidance of my research advisor.
          </p>     
        </div>
        <div>
          <h2 className="font-medium text-2xl tracking-tighter mt-5">NextThought</h2>
          <h3 className="font-medium text-xl tracking-tighter">Continuous Integration Manager</h3>
          <p className="text-stone-950 font-light">
            2017-2021
          </p>
          <p className="text-stone-950 text-sm font-bold">
          Jenkins, Java, Developer Operations
          </p> 
          <p className="prose prose-stone">
          I developed and maintained <a href="https://www.nextthought.com/">NextThought’s</a> continuous integration software. I also managed many of the company's machines and sub-networks. 
          </p>      
        </div>
      </div>

      <hr className="my-4 border-neutral-100"></hr>
      <div>          
        <h1 className="font-semibold text-3xl mb-1 tracking-tighter">Expertise</h1>
        <div>
          <h2 className="font-medium text-2xl tracking-tighter">Programming</h2>
          <ul className="list-disc list-outside ml-4">
            <li>Proficient in several programming languages
              <ul className="list-disc list-inside ml-4">
                <li>Java, C#, C++, Python, Javascript, etc.</li>
              </ul>
            </li>
            <li>Development Experience in Unity, Unreal, and Godot</li>
          </ul>
        </div>
        <div>
          <h2 className="font-medium text-2xl tracking-tighter">Japanese</h2>
          <ul className="list-disc list-outside ml-4">
            <li>Certified Japanese proficiency at <b>JLPT N2</b>  level</li>
            <li>Skilled in Japanese-English translation</li>
            <li>Intermediate Japanese speaking ability</li>
          </ul>
        </div>
        <div>
          <h2 className="font-medium text-2xl tracking-tighter">Art</h2>
          <ul className="list-disc list-outside ml-4">
            <li>Skilled in writing, photography, editing, and music composition.</li>
          </ul>
        </div>
      </div>


        
        
        
    </section>
  );
}
