'use client'

import { FullAV } from "@/components/full-av";
import {useTranslations} from 'next-intl';
import { BeautyLogo } from "@/components/logos";
import BeautyBackground from "@/public/games/beauty/KeyProto.webp"
import beautyArt from "@/public/games/beauty/beautyTest.webp"
import beastArt from "@/public/games/beauty/beast.webp"


export const dynamic = 'force-dynamic'
export const runtime = 'edge';
export default function Page({params: locale}) {
  const t = useTranslations('Games.Tenjin');
  return (
    <section className="lg:mx-24 md:mx-16 xl:mx-48 2xl:mx-72">
        <BeautyLogo></BeautyLogo>
        <h3 className="mt-6"><i>Co-designed with Zhu Yiwen</i></h3>
        <FullAV className="" fallback={BeautyBackground}></FullAV>
        <div>
          <div>
              <ul className="text-sm">
                <li><b>Game Engine: </b>Godot</li>
                <li><b>Genre: </b>Action/Adventure</li>
                <li><b>Control Scheme: </b>Simultaneous Character Control</li>
                <li><b>Release: </b>In-development</li>
              </ul>
          </div>
          <div className="prose prose-gray">
            <h3 className="-mt-2">A globetrotting adventure exploring the myths and legends of world culture. Inspired by 2D action-adventure classics (<i>Zelda, Mana</i>) mixed with modern design influences (<i>Brothers</i>, <i>Haven</i>) and presented in the style of a Japanese BL romance.</h3>
          </div>
          <div className="mb-1">
            <h2 className="text-5xl mb-4">Concept</h2>
            <h3 className="text-3xl">Premise</h3>
            <div className="prose prose-gray mb-6">
              <p>
              Our hero awakens by a lake&mdash;as fairytalelike as it is unfamiliar. Admiring the scenic view, he suddenly realizes that he's lost all of his memories.
              Exploring this unknown world, our hero finds only more questions--unknown creatures, magical fairies, and...a wild beast poised for attack! 
              </p>
              <FullAV className="" fallback={beautyArt} caption="Beauty concept art"></FullAV>
              <p>
              The hero braces for death, when a fairy miraculously appears&mdash;aiding Beauty in subduing the monster. The beast’s fur dissipates, revealing a human beneath&mdash;much to the hero’s surprise.
              The fairy reveals that our hero is named Beauty, and that the man&mdash;known merely as <i>Beast</i>&mdash;has been cursed by the realm's most powerful magician. Owing to his curse, Beast transforms into a wild animal whenever he is emotionally excited.
              </p>
              <FullAV className="" fallback={beastArt} caption="Beast concept art"></FullAV>
              <p>
              Surprised by this turn of events, and alone with no past to guide him in this mysterious world, Beauty decides to help Beast.
              And so, the two embark on a grand journey to lift Beast's curse and discover Beauty's past.
              </p>
              <p>
                Journey with Beauty and Beast as they adventure through a diverse world inspired by the myth and legends of several world cultures! Encounter a cast of memorable characters and help them overcome their hardships&mdash;unraveling the mysteries behind Beast's curse, Beauty's forgotten past, and the connections that lay hidden between them!
              </p>
            </div>
            <div>
            <h3 className="text-3xl">Design</h3>
              <div className="prose prose-gray mb-4">
                <p>
                  Originally themed around dinosaurs (who doesn't love a cute dino?), this prototype saw competing racers dual-wielding JoyCons: one strapped to their leg, with another held in hand. Players ran in-place to control the (on-rails) speed of their character&mdash;challenging their athletic ability&mdash;while using their handheld JoyCon to answer boost-granting quiz questions&mdash;rewarding academic expertise.
                </p>   
                <p>
                  As the game was designed with small children in mind, questions were limited to simple arithmetic. But hey&mdash;<i>you</i> try answering math questions while sprinting like a madman<i>!</i>
                </p>
                <p>
                  After a few months of non-stop struggles against Unity, and following many sleepless nights spent red-eyed&mdash;bringing myself up to speed with C#'s many idiosyncrasi&mdash;<b><i>cough</i></b>&mdash;I mean er....<i>'novel paradigms'</i>&mdash;I finally put together a decent 'alpha' build, which we showcased at local events in summer/fall 2022.
                </p>
              </div>  
              <div className="prose prose-gray mb-4">
                <p>
                Since this was my first attempt at real game development...lets just say that the road was <b><i>veeeeery</i></b> bumpy. Although I had a CS degree and a lifetime of computer/game obsession under my belt...settling into the strategies and paradigms of game engines like Unity or Unreal is a far cry from the world I knew. Looking back on my early code now, let's just say it's probably for the best we leave those branches unpublished...
                </p>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-3xl">Evolution</h3>
              <div className="prose prose-gray">
                <p>Thankfully, I would receive a good reason to refine the game just a few days after completion. My advisor had been working with <a href="https://www.nikken.co.jp/">Nikken Sekkei</a>&mdash;the second largest architectural practice on earth&mdash;<a href="https://built.itmedia.co.jp/bt/articles/2301/30/news178_2.html">on a project</a> to promote future technologies related to architecture, city planning, and urban design in Fukuoka's downtown district, Tenjin. Naturally, games, gamification, and serious games were some of the future technologies on the docket&mdash;leading me to join the project.
                </p>
                <p>
                  And so, <i>DinoDash</i> (<b>R.I.P.</b>) was quickly repurposed for the occasion&mdash;transforming into <i>Tenjin Dash</i>. The collaboration would culminate a few months later with a formal event held in Tenjin, leaving only a few weeks for me to rebuild the entire game from the <b><i>ground up.</i></b>
                </p>
                <p>The ensuing chaos would be another essential game development 'first' for me.</p>
              </div>
          </div>
          <div className="mb-4">
            <h3 className="text-3xl">The Big Time</h3>
            <div className="prose prose-gray">
              <p>
                3D models of Tenjin were supplied by Nikken Sekkei, while I was left to design, develop, and present the game myself. Music was supplied by the great <a href="https://www.instagram.com/shilohbeeler/">Shiloh Beeler.</a>
              </p>
              <p>
                As the pressure grew, so did my ambitions. I incorporated an arcade-style 'attract screen,' designed my own cutscenes that introduced the race, and re-wrote much of the game's code to increase the fun-factor with some of that ol' <a href="https://www.youtube.com/watch?v=6PqjBPGAFo0"><i>Sega magic.</i></a>
              </p>
              <p>
                And at last...it was time for the most feared concept in any game developer's mind: <b><i>demo time.</i></b> I, my advisor, and a few underclassmen-turned-assistants found ourselves at the <a href="https://resolatenjin.jp/hall/"><i>Resola Hall</i></a>, surrounded by a legion of salarymen clad in businesswear. 
              </p>
            </div> 
            <div className="prose prose-gray">
              <p>After a panel co-hosted by my advisor, we let the audience take the game for a spin themselves. I was out-of-my-mind with nervous energy...but overall, everyone loved it! Mission success!</p>
            </div>
            <div className="prose prose-gray">
            <h3 className="text-3xl">Aftermath</h3>
              <p>
                After the event, the game was further polished and has become a mainstay at events for my advisor's Serious Games Project!
              </p>
              <p>
                As a first-time development experience, <i>Tenjin Dash</i> was crucial in building my understanding of core game design concepts. The process also allowed me the space to experiment, giving me the chance to find my own techniques, strategies, and voice. It certainly is a rough project, but I'll forever be proud of my little dinos that could... 
              </p>
            </div>
          </div>
        </div>
    </section>
  );
}
