'use client'
import Image from "next/image";

import earlyFallback from '@/public/games/ez/early_fallback.webp'
import glitchedFallback from '@/public/games/ez/glitched_fallback.webp'
import gunFallback from '@/public/games/ez/gun_fallback.webp'
import outdoorsFallback from '@/public/games/ez/outdoors_fallback.webp'
import puzzleFallback from '@/public/games/ez/puzzle_fallback.webp'
import walkingFallback from '@/public/games/ez/walking_fallback.webp'

import { FullAV } from "@/components/full-av";
import {unstable_setRequestLocale} from 'next-intl/server';
import { EnemyZeroLogo } from "@/components/logos";
export const dynamic = 'force-dynamic'
export const runtime = 'edge';
export default function Page({params: locale}) {
  return (
    <section className="lg:mx-72 md:mx-16">
        <EnemyZeroLogo></EnemyZeroLogo>
        <div>
          <FullAV
          fallback={walkingFallback}
          ></FullAV>
          <div>
              <ul className="text-sm">
                <li><b>Game Engine:</b> Unreal</li>
                <li><b>Genre:</b> Horror/Adventure</li>
                <li><b>Control Scheme:</b> VR, Spatial Audio</li>
                <li><b>Created:</b> Oct. 2023</li>
              </ul>
          </div>
          <div className=" mt-4 md:text-2xl text-white font-baskervvile">
            <h3>Laura is awake. <br/>She shouldn't be.</h3>
            <h3><br/>Something else is on-board. <br/><i className=" text-red-700">It shouldn't be.</i></h3>
          </div>
          <FullAV location="/games/ez/ez_walking.webm" fallback={walkingFallback} dark></FullAV>
          <FullAV 
              location="/games/ez/ez_early.webm" 
              fallback={earlyFallback}
              dark
              caption="The sweet taste of victory..."
            ></FullAV>
          <div className="mb-1">
            <h2 className="text-5xl mb-4">Concept</h2>
            <div className="prose prose-invert">
              <p>
                <i>Tenjin Dash</i> came about in June 2022 at the request of my research supervisor, <a href="https://hyoka.ofc.kyushu-u.ac.jp/search/details/K002398/english.html">Hiroyuki Matsuguma</a>. The project would quickly transform from 'simple prototype' to my first true game development challenge.
              </p> 
              <p>
                Tasked with designing a simple <a href="https://en.wikipedia.org/wiki/Serious_game">serious game</a> aimed at children, I considered concepts centered on exercise and education before arriving at a rough design that combined the two.
              </p>
            </div>
            <FullAV 
              location="/games/ez/ez_gun.webm" 
              fallback={gunFallback}
              dark
              caption="Early builds were...a little buggy."
            ></FullAV>
            <div>
              <div className="prose prose-invert mb-4">
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
              <FullAV 
              location="/games/ez/ez_outdoors.webm" 
              fallback={outdoorsFallback}
              caption="The kids love it!"
              dark
              ></FullAV>
              <div className="prose prose-invert mb-4">
                <p>
                Since this was my first attempt at real game development...lets just say that the road was <b><i>veeeeery</i></b> bumpy. Although I had a CS degree and a lifetime of computer/game obsession under my belt...settling into the strategies and paradigms of game engines like Unity or Unreal is a far cry from the world I knew. Looking back on my early code now, let's just say it's probably for the best we leave those branches unpublished...
                </p>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-3xl">Background</h3>
              <div className="prose prose-invert">
                <p>Thankfully, I would receive a good reason to refine the game just a few days after completion. My advisor had been working with <a href="https://www.nikken.co.jp/">Nikken Sekkei</a>&mdash;the second largest architectural practice on earth&mdash;<a href="https://built.itmedia.co.jp/bt/articles/2301/30/news178_2.html">on a project</a> to promote future technologies related to architecture, city planning, and urban design in Fukuoka's downtown district, Tenjin. Naturally, games, gamification, and serious games were some of the future technologies on the docket&mdash;leading me to join the project.
                </p>
                <p>
                  And so, <i>DinoDash</i> (<b>R.I.P.</b>) was quickly repurposed for the occasion&mdash;transforming into <i>Tenjin Dash</i>. The collaboration would culminate a few months later with a formal event held in Tenjin, leaving only a few weeks for me to rebuild the entire game from the <b><i>ground up.</i></b>
                </p>
                <p>The ensuing chaos would be another essential game development 'first' for me.</p>
              </div>
          </div>
          <div className="mb-4">
            <h3 className="text-3xl">In Tune and On Time</h3>
            <div className="prose prose-invert">
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
            <FullAV 
              location="/games/ez/ez_puzzle.webm" 
              fallback={puzzleFallback}
              caption="Seeing my own game presented was an incredibly surreal sight."
              dark
              ></FullAV>
            <div className="prose prose-invert">
              <p>After a panel co-hosted by my advisor, we let the audience take the game for a spin themselves. I was out-of-my-mind with nervous energy...but overall, everyone loved it! Mission success!</p>
            </div>
            <FullAV 
              location="/games/ez/ez_glitched.webm" 
              fallback={glitchedFallback}
              caption="The event's dress code might have made things a little awkward for players..."
              dark
              ></FullAV>
            <div className="prose prose-invert">
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
