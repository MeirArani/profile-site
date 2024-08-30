'use client'
import Image from "next/image";

import earlyFallback from '@/public/games/ez/early_fallback.webp'
import glitchedFallback from '@/public/games/ez/glitched_fallback.webp'
import gunFallback from '@/public/games/ez/gun_fallback.webp'
import outdoorsFallback from '@/public/games/ez/outdoors_fallback.webp'
import puzzleFallback from '@/public/games/ez/puzzle_fallback.webp'
import walkingFallback from '@/public/games/ez/walking_fallback.webp'
import uvImage from '@/public/games/ez/model_uvs.webp'
import mapSketch from '@/public/games/ez/map_sketch.webp'

import { FullAV } from "@/components/full-av";
import {unstable_setRequestLocale} from 'next-intl/server';
import { EnemyZeroLogo } from "@/components/logos";
export const dynamic = 'force-dynamic'
export const runtime = 'edge';
export default function Page({params: locale}) {
  return (
    <section className="lg:mx-48 md:mx-16 xl:mx-72 2xl:mx-72">
        <EnemyZeroLogo></EnemyZeroLogo>
        <div className="flex flex-col items-center text-center mt-12 mb-12 text-2xl md:text-3xl text-white font-baskervvile">
            <h3>Laura is awake. <br/>She shouldn't be.</h3>
            <h3 className="mt-6">Something else is on-board.</h3>
            <h3 className=" text-red-700">It shouldn't be.</h3>
          </div>
        <div>
          <FullAV
          fallback={walkingFallback}
          ></FullAV>
          <div className="flex flex-col items-center text-center mt-12 text-2xl md:text-3xl text-white font-baskervvile">
            <h3>A labyrinth of iron and steel. </h3>
            <h3 className="mt-4">A species beyond comprehension.</h3>
            <h3 className="mt-4">A fight against the senses.</h3>
            <br className="my-5"></br>
            <h3>Laura can hear it.</h3>
            <h3 className="text-red-700"><i>Can you?</i></h3>
          </div>
          <div className="mt-8">
              <ul className="md:text-xl">
                <li><b>Game Engine:</b> Unreal</li>
                <li><b>Genre:</b> Horror/Adventure</li>
                <li><b>Control Scheme:</b> VR, Spatial Audio</li>
                <li><b>Created:</b> Oct. 2023</li>
              </ul>
          </div>
          <div className="mt-8">
            <h2 className="text-5xl mb-2">Concept</h2>
            <div>
              <h3 className="text-3xl">Story</h3>
              <div className="prose prose-invert w-full">
                <p>
                  Laura Lewis is suddenly awakened from her cryosleep on the space station AKI&mdash;a biological research station located in deep-space. The cause? An explosion. Something unknown&mdash;something <i>alien</i>&mdash;has found its way onto the ship.
                </p>
                <FullAV location="/games/ez/ez_walking.webm" fallback={walkingFallback} dark caption="Exploring the AKI's endless halls."></FullAV>
                <p>
                  Laura, confused by the chaos, uses the ship's video system to contact her fellow crewmate Parker. A frantic explanation starts pouring out of his mouth before he suddenly comes screeching to a halt. Laura stares on in confusion as he looks away from the monitor. A terrifying shriek sends him rushing for his weapon&mdash;but it's already too late: Parker is mutilated by an unknown creature as Laura watches in sheer terror. The most horrifying part? She can't even see the alien monster ripping her friend to shreds.
                </p> 
                <p>
                  The invading creatures seem to be completely invisible to the human eye. And based on the footsteps outside her room, Laura's starting to realize that there's more than just one of these horrifying aliens on-board.
                </p>
                <p>Join Laura as she explores the AKI! Rescue crewmates, unravel the secrets of the mysterious <i className="text-red-700">E0</i> project, and search for a way back to earth, all while evading the deadly monsters lurking around every corner.</p>
              </div>
            </div>
            <div>
              <h3 className="text-3xl my-4">Design</h3>
              <h4 className="mt-2 text-2xl -mb-2">Overview</h4>
              <div className="prose prose-invert">
                <p>
                  Enemy Zero takes heavy influence from it's namesake: building upon the same premise, world, and characters found in the original <i>Enemy Zero.</i> Thoughtful new design choices have also been included to refresh Kenji Eno's cult classic for the modern age. Inspired by the best in contemporary horror, adventure, and metroidvanias, and combined with the ultra-immersive cutting edge experiences that only VR can provide, this remake seeks to evolve horror games like Eno's own work did in the 1990s. 
                </p>
                <FullAV 
              location="/games/ez/ez_outdoors.webm" 
              fallback={outdoorsFallback}
              caption="A simulation of springtime on earth&mdash;one of the many holographic decks found on the AKI."
              dark
              ></FullAV>
                <p>
                Players find themselves exploring the many decks of the space station AKI, which are themed after the four seasons and segment the game into distinctly themed zones. Players must navigate the ship's treacherous labyrinths&mdash;where they encounter narrative set-pieces, solve clever puzzles, and try to survive terrifying enemy encounters&mdash;rationing their limited resources all along the way. 
                </p>
                <p>
                <i>Enemy Zero's</i> most interesting twist was its lack of enemy visibility. That's right, these deadly monsters are completely invisible to the naked eye&mdash;at least until they're good and dead. So how is a terrified player supposed to cope with such a horrifying situation? One word: <i>Sound.</i>
                </p>
                <p>
                  Laura is given a device that identifies an enemy's distance and orientation (relative to the player) using beeps that vary in pitch (direction) and frequency (distance). This simple, yet ingenious system absolutely enthralls&mdash;even on ancient hardware&mdash;creating one of the most creative and intense horror experiences in gaming. 
                </p>
                <h4 className="text-2xl">Visualization</h4>
                <p>
                  <b>Just picture it:</b> A mesmerized player, soaking in the atmosphere of the AKI, wandering its halls as they search for their next objective. The unpredictable ambience of the ship&mdash;the bursting of steam from its pipes or the creaking and moaning of its steel&mdash;has them on constant edge. But it's the sudden beep on their radar&mdash;the prelude to a deadly encounter&mdash;that forces their heart skip a beat. The sounds grow louder, <i>closer,</i> as the beeps begin to change in pitch. The tense moment causes the player to confuse the radar's pitch directions. They grow increasingly terrified while the monster encircles its prey.
                </p>
                <p>
                  <b><i>It's...behind me...no...to my left?...or is it...oh GOD!</i></b> 
                </p>
                <p>
                  The energy-starved player readies their weapon: their absolute last line of defense. They were hoping to escape the monster's grasp undetected&mdash;as they know losing their energy stores will cause them problems down the line. But now they have no choice&mdash;it's either do, <i>or die.</i> Unfortunately for them, their weapon needs a few seconds to charge up a shot&mdash;leaving only a moment's window to fire before overheating. 
                </p>
                <FullAV 
                  location="/games/ez/ez_gun.webm" 
                  fallback={gunFallback}
                  dark
                  caption="A mockup of Laura's weapon&mdash;which can be quickly drawn or re-holstered&mdash;while lights on the gun indicate its current charging status."
                ></FullAV>
                <p>
                  The radar's sounds climax in a fury. The player raises their weapon, holds their breath, starts the charge, and prays they remembered their directions right. They hear the sounds of footsteps&mdash;rapidly approaching them. A beep is heard&mdash;their weapon ready to fire. A horrifying alien scream explodes upon the player's left ear. They turn and release the trigger. They hear another scream: the creature's final gasp of life. It looks like they guessed right. 
                </p>
                <p>
                  <i>But will they be so lucky next time?</i>
                </p>
                <p>
                Pretty intense, right?
                <br/>
                <b><i>Now Imagine that in VR.</i> </b>
                </p>
                <h4 className="text-2xl">New Tricks</h4>
                <p>
                  Of course, we can do better than to just transplant a 90s game into the modern age. More dynamic enemies (and new ways to 'sense' them), unique weapons, more intricate puzzle design, immersive spatial audio, and a fleshed out story are just a few things planned to improve upon <i>Enemy Zero</i>.
                </p>
                <p>
                  Bringing the original's lighting-in-a-bottle design into the contemporary gaming world also lets us to expand upon the game's incredibly brisk pacing. After all, mid-90s CD-ROM games were just as often focused on their awe-inspiring (yet data-hungry) FMV cutscenes as they were their gameplay content&mdash;leading to (as I'm sure many of us remember) insanely long load-times for shockingly short game runtimes.
                </p>
                <p>
                  For example, Laura receives her ace-in-the-hole against the invading aliens&mdash;the radar&mdash;literal minutes into the game. There are a few small mix-ups to keep things fresh later in the game, but the overall gameplay loop described here dominates virtually all of the runtime. But why should Laura get such a powerful tool so early on? Why shouldn't she work for it? 
                </p>
                <FullAV 
                  location="/games/ez/ez_puzzle.webm" 
                  fallback={puzzleFallback}
                  caption="Prototyping puzzles entities in VR&mdash;where design possibilities feel boundless compared to standard, non-VR games (sick free-throws included)."
                  dark
                ></FullAV>
                <p>
                  <b>Presenting: <i>the directional microphone</i></b>. In <i>Enemy Zero VR</i>, Laura's omnidirectional radar isn't within reach at the start of the game. Instead, she discovers a rusty shotgun mic while trawling a storage closet for supplies. The mic only amplifies noise in the direction pointed, meaning Laura will have to be constantly on guard for threats... 
                  <br/>
                  <b className="mt-2"><i>All. Around. Her.</i></b>
                </p>
                <p>
                  To make matters worse, the old hunk of junk is also an insane battery hog--meaning Laura will be depleting her precious energy stores (shared with other tools like her weapons) every time she uses it.
                  <br/>
                  <i>Stressed yet? </i>
                </p>
                <p>
                  The inclusion of a directional mic is just one of the many interesting features made possible by VR&mdash;where players are free to independently control both of Laura's hands at the same time. Perhaps the player will be wielding a weapon in their free hand, ready to blast away an incoming foe. Or maybe they'll be forced to ferry puzzle items across the AKI. Risky players may opt to use a gun in their free hand, relying on pure reaction instinct to take on enemies; while cautious players may opt for the directional microphone, evading detection as they make their way across the station without a weapon.
                </p>
                <p>
                  All these ideas, and many more will be found in <i>Enemy Zero VR</i>. The only question left is if you're ready to experience this next evolution of survival horror!
                </p>
              </div>
              
            </div>
          </div>          
          <div className="mb-1">
            <h2 className="text-5xl mb-4 mt-6">Background</h2>
            <h3 className="text-3xl my-2">Class Projects & Strange Dreams</h3>
            <div className="prose prose-invert">
              <p>Kenji Eno has been one of my gaming icons since I came across his offbeat horror classic <i>D</i> while I was in middle school. I've found many of his games deeply compelling&mdash;each practically bursting at the seams with creativity. Enemy Zero stood out in particular though. <i>D2</i> might have cohered his vision into something that more-closely resembles modern game design...but <i>Enemy Zero</i> presented a vision of gaming I had never seen before&mdash;a world of <b><i>visionless</i></b> gaming&mdash;where we must use our other senses in order to 'see.'
              </p>
              <p>
              Fast forward a few years, and I found myself in a graduate course for VR design&mdash;centered on a final project of our choosing. The idea of an <i>Enemy Zero</i> VR remake had been floating around in my head for some years, so I decided to pull the trigger.
              </p>
              <p>
                Of course, I had zero clue what I was signing myself up for... 
              </p>
            </div>
            <h3 className="text-3xl my-4">Best Foot Forward...</h3>
            <div>
              <div className="prose prose-invert">
                <p>
                  I knew from the start that I wanted to use the Unreal Engine to develop the project. Why? Because I had never given the engine the <i>ol'</i> (and for once, literal) college try. Looking back, I'm happy I decided to wrestle with the engine under those circumstances...but it absolutely caused me a lot of headaches. 
                </p>  
                <FullAV 
                  location="/games/ez/ez_early.webm" 
                  fallback={earlyFallback}
                  dark
                  caption="Early attempts at VR integration were...rocky, to say the least."
                ></FullAV> 
              </div>  
              <div className="prose prose-invert mb-4">
                <p>
                  Since this was my first attempt at real game development...lets just say that the road was <b><i>veeeeery</i></b> bumpy. Although I had a CS degree and a lifetime of computer/game obsession under my belt...settling into the strategies and paradigms of game engines like Unity or Unreal is a far cry from the world I knew. Looking back on my early code now, let's just say it's probably for the best we leave those branches unpublished...
                </p>
                <p>
                To make matters worse, I wasn't even targeting something basic with my first Unreal project&mdash;we're talking about <b>VR</b> development here. I knew, even at at the time, that it was one of the (if not <i>the</i>) most difficult segment of game development and design out there&mdash;right on the cutting edge of what's even possible in the medium. Of course, my first project also involved a non-traditional control scheme (JoyCon based physical movement)...so maybe I'm just a sucker for punishment.
                </p>
                <p>
                  And the cherry on top? This was a class project&mdash;meaning I needed to have something 'final' to present just a few short weeks later. My university's calendar ran on a quarterly system, so each academic period lasted a mere 9 weeks. I would have to go from zero to demo like I was a studio in crunch time--and I was a <i>one man</i> team with <i>zero</i> Unreal or VR development experience. 
                </p>
                <FullAV 
                  fallback={uvImage}
                  dark
                  caption="I guess 3D architecture software doesn't really care about UV/collision mapping, does it?"
                ></FullAV> 
                <h3 className="text-3xl my-4">Fighting Uphill</h3>
                <p>
                  Well...not exactly. This project was technically a group project. But I think we all know how that goes. Despite having a team of five, only one other member helped out&mdash;supplying me with 3D models for the game's assets. Unfortunately though, his expertise was in architecture and definitely not in game development&mdash;meaning his models were horribly malformed (messed up UVs, etc.) and required some manual polishing done by me. But to be fair, his field of expertise is clearly less worried about collision detection and more worried about structural logistics and style.
                </p>
                <p>
                 I designed my own slice of Enemy Zero VR over a few days&mdash;level layouts, puzzles, visual theming, and enemy encounters included. My plans were very ambitious considering my timeframe and lack of Unreal/VR experience...but I carried on!
                </p>
                <FullAV 
                  fallback={mapSketch}
                  dark
                  caption="My original rough sketch for the prototype map."
                ></FullAV> 
                <p>
                  Within a few weeks, I had a basic working demo of the game's atmosphere. You could wander around the corridors of the AKI&mdash;and take in the haunting darkness of the ship in VR! Of course it was far from a final version of anything...but even I'll admit there was something horrifying about turning a corner, seeing the lights in the distance dim&mdash;descending into what felt like the void. 
                </p>
                <FullAV
                  fallback={walkingFallback}
                  dark
                  location="/games/ez/firstdark.webm"
                  caption="Even I was spooked by this early hallway tests. Although maybe that's just because I was working alone in the lab at 1 AM..."
                  ></FullAV>
                <p>
                  Of course, atmospheric movement alone wasn't going to sell a game...but it certainly would sell a class project. Still, I persisted with what little time I had left&mdash;adding weapon support (with a virtual 'holster' that the player could draw from at any time), weapon charging (with visual indicators which light up the weapon), basic puzzle interactables (buttons, slots, items), and even a virtual 'simulation' of earth that was designed as a part of a puzzle for the project.
                </p>
                <p>
                There was still some work required to finish a complete vertical slice of the game (enemy AI, weapon logic, spatial audio, improved atmospherics), but my deadline had arrived. And, unfortunately, a few issues with the Unreal engine&mdash;including some VR render pipeline quirks and an as-of-yet unresolved shader glitch that sends the game into Nightmare Mode at random&mdash;left me with no time to put on the final touches I desired. Still, I was very proud of the work I was able to accomplish in such a short timeframe&mdash;especially considering I was essentially working alone from scratch with zero prior experience.  
                </p>
                <FullAV
                  fallback={glitchedFallback}
                  dark
                  location="/games/ez/ez_glitched.webm"
                  caption="The dreaded shader bug would strike as randomly as it vanished. Although it did make the game look kinda cool."
                ></FullAV>
                <p>
                  Other courses, projects, and the graduate thesis looming over me, have kept me from picking up work on the prototype again...but I hope to return to it in due time. I genuinely believe that an <i>Enemy Zero</i> remake (or something very similar) would be the perfect horror game, even some 20 odd years after the original's release. My demo&mdash;as meager as it was being birthed from a school project, completed in record time by a complete newbie&mdash;had enough scares to hook me at times. And if that isn't what makes for a good game...I don't know what will. 
                </p>
              </div>
            </div>
          </div>
        </div>

    </section>
  );
}
