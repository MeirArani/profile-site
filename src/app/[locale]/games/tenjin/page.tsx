'use client'

import exhibitFallback from '@/public/games/tenjin/exhibit_fallback.webp'
import panelFallback from '@/public/games/tenjin/panel_fallback.webp'
import buggyFallback from '@/public/games/tenjin/buggy_fallback.webp'
import dinoFallback from '@/public/games/tenjin/dino_fallback.webp'
import raceFallback from '@/public/games/tenjin/race_fallback.webp'
import mainFallback from '@/public/games/tenjin/main_fallback.webp'
import { FallbackVideo } from "@/components/full-video";
import {useTranslations} from 'next-intl';

export const dynamic = 'force-dynamic'
export const runtime = 'edge';
export default function Page({params: locale}) {
  const t = useTranslations('Games.Tenjin');
  return (
    <section className="lg:mx-24 md:mx-16 xl:mx-48 2xl:mx-72">
        <h1 className={`font-tenjin text-5xl mb-6`}>Tenjin Dash</h1>
        <FallbackVideo location="/games/tenjin/tenjindash.webm" fallback={mainFallback}></FallbackVideo>
        <div>
          <div>
              <ul className="text-sm">
                <li><b>Game Engine:</b> Unity</li>
                <li><b>Genre:</b> Racing/Arcade</li>
                <li><b>Control Scheme:</b> JoyCons, Running</li>
                <li><b>Release:</b> 2022</li>
              </ul>
          </div>
          <div className="prose prose-gray">
            <h3 className="-mt-2">An arcade-style racing experience inspired by the physical control schemes from games like <i>World Class Track Meet</i>.</h3>
          </div>
          <FallbackVideo 
              location="/games/tenjin/tenjin_race.webm" 
              fallback={raceFallback}
              caption="The sweet taste of victory..."
            ></FallbackVideo>
          <div className="mb-1">
            <h2 className="text-5xl mb-4">Background</h2>
            <h3 className="text-3xl">Prototype&mdash;<i>DynoDash!</i></h3>
            <div className="prose prose-gray">
              <p>
                <i>Tenjin Dash</i> came about in June 2022 at the request of my research supervisor, <a href="https://hyoka.ofc.kyushu-u.ac.jp/search/details/K002398/english.html">Hiroyuki Matsuguma</a>. The project would quickly transform from 'simple prototype' to my first true game development challenge.
              </p> 
              <p>
                Tasked with designing a simple <a href="https://en.wikipedia.org/wiki/Serious_game">serious game</a> aimed at children, I considered concepts centered on exercise and education before arriving at a rough design that combined the two.
              </p>
            </div>
            <FallbackVideo 
              location="/games/tenjin/dino_buggy.webm" 
              fallback={buggyFallback}
              caption="Early builds were...a little buggy."
            ></FallbackVideo>
            <div>
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
              <FallbackVideo 
              location="/games/tenjin/dino_run.webm" 
              fallback={dinoFallback}
              caption="The kids love it!"
              ></FallbackVideo>
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
            <FallbackVideo 
              location="/games/tenjin/panel.webm" 
              fallback={panelFallback}
              caption="Seeing my own game presented was an incredibly surreal sight."
              ></FallbackVideo>
            <div className="prose prose-gray">
              <p>After a panel co-hosted by my advisor, we let the audience take the game for a spin themselves. I was out-of-my-mind with nervous energy...but overall, everyone loved it! Mission success!</p>
            </div>
            <FallbackVideo 
              location="/games/tenjin/exhibit.webm" 
              fallback={exhibitFallback}
              caption="The event's dress code might have made things a little awkward for players..."
              ></FallbackVideo>
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
