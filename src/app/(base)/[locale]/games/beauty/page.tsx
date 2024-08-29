'use client'

import { FullAV } from "@/components/full-av";
import {useTranslations} from 'next-intl';
import { BeautyLogo } from "@/components/logos";
import BeautyBackground from "@/public/games/beauty/KeyProto.webp"
import beautyArt from "@/public/games/beauty/beautyTest.webp"
import beastArt from "@/public/games/beauty/beast.webp"
import beautyMockup from "@/public/games/beauty/beautyVN.webp"


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
            <h3 className="text-4xl">Premise</h3>
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
            <h3 className="text-4xl">Design</h3>
              <div className="prose prose-gray">
                <p>
                  <i>Beauty</i> is heavily inspired by the classic 2D action-adventure games of yore&mdash;namely the classic <i>Legend of Zelda</i> titles as well as the 2D games in the <i>Mana</i> series. You can expect plenty of dungeon-exploring, puzzle-solving, enemy-smashing fun here&mdash;but there's also a few tricks up our sleeves. 
                </p>
                <h4 className="text-3xl not-prose text-black mb-4">Forming a Bond</h4>
                <p>
                  <i>Beauty</i> is a game centered around connections&mdash;the bonds formed between Beauty and Beast, the protagonists and the NPCs they befriend, and even between the player and the player characters. So when it came time to design the game's mechanics, the notion of <i>bonds</i> were already at the forefront of the mind. It didn't take long for me to look towards the works of Josef Fares (<i>Brothers, A Way Out, It Takes Two</i>) for some inspiration. And suddenly...<i>eureka.</i> 
                </p>
                <p> 
                  Why make the gameplay focus on either Beauty or Beast? The narrative was equally shared between them, after all. <i>So why not focus on both at the same?</i> Instead of thinking of <i>Beauty</i> in terms of being a <i>Zelda</i> game...what if it was a <i>Link & Zelda</i> game?
                </p>
                <p>
                  Enter <i>Beauty's</i> main design conceit: <b>the simultaneous control of its protagonists.</b> Instead of opting for a co-op experience (although perhaps that can be explored as an optional feature for couch-hungry gamers), <i>Beauty</i> focuses on the challenges of multitasking as both Beauty and Beast. 
                </p>
                <p>And, to re-emphasize the <i>Zelda & Link</i> comparison, both protagonists serve very different roles in the gameplay experience. Beast functions more like your average action hero&mdash;tanking hits during combat while dishing out the lion's share of damage; Beauty, meanwhile, is more focused on supporting Beast in combat&mdash;taking the leading role during puzzle and exploration sections of the game. The synergy of these two very different playstyles allows </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
