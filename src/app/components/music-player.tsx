'use client'

import { AudioPlayer } from 'react-audio-player-component';

export function MusicPlayer() { 
  return (
    <div>
        <AudioPlayer 
          src="/music/ocean_suite/02-Crimson_Blue.mp3"
          minimal={true}
          width={325}
          trackHeight={25}
          volume={1}
          visualise={true}
          backgroundColor="#c3f3fa"
          barColor="#1ca7bd" 
          barPlayedColor="#fb038e"
        />
    </div>
  )
}