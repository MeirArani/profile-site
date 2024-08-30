'use client'

import { FullAV } from "@/components/full-av";
import {useTranslations} from 'next-intl';
import { BeautyLogo } from "@/components/logos";
import BeautyBackground from "@/public/games/beauty/KeyProto.webp"
import beautyArt from "@/public/games/beauty/beautyTest.webp"
import beastArt from "@/public/games/beauty/beast.webp"
import beautyMockup from "@/public/games/beauty/beautyVN.webp"
import explainer from "@/public/games/beauty/explainer.webp"


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
                <p>And, to re-emphasize the <i>Zelda & Link</i> comparison, both protagonists serve very different roles in the gameplay experience. Beast functions more like your average action hero&mdash;tanking hits during combat while dishing out the lion's share of damage; Beauty, meanwhile, is more focused on supporting Beast in combat&mdash;instead taking a leading role during puzzle and exploration sections. The synergy of these two very different playstyles allows for a lot of creative mechanics and memorable action/puzzle set-pieces. 
                </p>
                <FullAV
                fallback={explainer}
                caption="A rough sketch of the game's controls. Each character takes up one symmetrical half of the controller&mdash;having their own movement stick, attack (shoulder) buttons, and special ability (d-pad/face) buttons."
                ></FullAV>
                <p>
                  Take, for example, Beauty's supporting role during combat. Combined with Puck's magic abilities, Beauty could focus on providing healing, buffs, and combo setups for Beast, while also perhaps accomplishing a few different sub-objectives of their own. Enemies could drop magical energies that only Beauty could pick up&mdash;requiring players to intelligently weave Beauty through an active combat zone while Beast kites enemies around the field. Instead of conventional combat, Beauty might use magical projectiles to hitstun enemies or provide debuffs that Beast could utilize in his combat strategies; or maybe Beast could throw enemies towards Beauty, controlling enemy placement while also doing massive damage to foes.    
                </p>
                <p>
                  The same is also true on the flipside. Beast could utilize his overwhelming strength and speed in puzzle sections where Beauty might be lacking. He could throw items, burst through walls, move heavy objects, ascend heights, or perform any other puzzle idiom that might prove interesting. Providing players (and the designers) with two unique characters to solve puzzles with simultaneously opens up the floodgates to interesting puzzle design and thoughtful ludonarrative integration. 
                </p>
                <h4 className="text-3xl not-prose text-black mb-4">Crafting a Diverse World</h4>
                <p>
                  Of course, there's a lot more to a good <i>Zelda</i> style game than combat alone. Players also crave a unique and diverse world filled with interesting locales and set-pieces. <i>Beauty</i> pulls from real world myths and legends from around the globe, coloring the game's locales, characters, and mechanics with varied and unique influences.
                </p>
                <p>
                  Three major "zones" have already been developed for the game&mdash;dividing the world into fantasy environments with a European, Middle Eastern, and Far East flavor. A great deal of thought and research has gone into the particular fairytales from each of these cultures (pulling from sources such as the works of the Brothers Grimm or from the <i>Arabian Nights</i>). Although these stories already felt close to home for both me and Zhu, coming from Iranian/American and Chinese backgrounds respectively. We hope to fill <i>Beauty's</i> world with rich and interesting characters, enemies, environments, and mechanics inspired by these equally rich and interesting cultures. 
                </p>
                <FullAV
                fallback={beautyMockup}
                caption="A mock of the dialogue UI."
                ></FullAV>
                <p>
                  Beyond just settings, we plan to pack <i>Beauty</i> with interesting NPC characters that form the backbone of the game's moment-to-moment narrative pacing. Our protagonists will encounter many characters as they explore the world. The duo will learn of their backstories and problems, find ways to aid them through their quests, and eventually resolve their issues&mdash;learning more about themselves and their own relationship in the process. NPC characters will, of course, be themed based upon the zone they live in&mdash;often being inspired by characters commonly found in the respective folklore, although with some new twists to strengthen the world and stories of <i>Beauty.</i>
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
