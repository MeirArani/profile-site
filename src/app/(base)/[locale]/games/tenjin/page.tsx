import buggyFallback from '@/public/games/tenjin/buggy_fallback.webp';
import dinoFallback from '@/public/games/tenjin/dino_fallback.webp';
import { FullAV } from 'components/full-av';
import RichText from 'components/rich-text';
import TenjinEN from './en.mdx';
import { MDXRemote, MDXRemoteOptions } from 'next-mdx-remote-client/rsc';
import { getSource } from '@/utils/file';
import { getMarkdownExtension } from '@/utils';
import mainFallback from '@/photos/games/tenjin/main_fallback.webp';
import raceFallback from '@/photos/games/tenjin/race_fallback.webp';
import panelFallback from '@/photos/games/tenjin/panel_fallback.webp';
import exhibitFallback from '@/photos/games/tenjin/exhibit_fallback.webp';

const components = {
  FullAV,
  wrapper: ({ children }) => <div className="mdx-wrapper">{children}</div>,
};
export default async function Page({ params: locale }) {
  const file = 'games/tenjin/en.mdx';
  const format = getMarkdownExtension(file);
  const source = await getSource(file);

  const options: MDXRemoteOptions = {
    mdxOptions: {
      // ...
    },
    scope: {
      mainFallback: mainFallback,
      raceFallback: raceFallback,
      panelFallback: panelFallback,
      exhibitFallback: exhibitFallback,
      mainVideo: '/assets/videos/games/tenjin/intro.webm',
      raceVideo: '/assets/videos/games/tenjin/liveRace.webm',
      panelVideo: '/assets/videos/games/tenjin/panel.webm',
      exhibitVideo: '/assets/videos/games/tenjin/exhibit.webm',
    },
  };

  if (!source) {
    return <div>Something's gone horribly wrong.</div>;
  }

  return (
    <MDXRemote
      source={source}
      options={options}
      components={components}
    ></MDXRemote>
  );
}
//<section className="lg:mx-24 md:mx-16 xl:mx-72 2xl:mx-72">
//   <h1 className={`font-tenjin text-5xl mb-6`}>{t('title')}</h1>
//   <FullAV
//     location="/games/tenjin/tenjindash.webm"
//     fallback={mainFallback}
//   ></FullAV>
//   <div>
//     <div>
//       <ul className="text-sm">
//         {info.map((key) => (
//           <li key={key}>
//             <b>{key}:</b> {t(`info.${key}`)}
//           </li>
//         ))}
//       </ul>
//     </div>
//     <div className="prose prose-gray">
//       <h3 className="-mt-2">{t('topline')}</h3>
//       {tenjin.background.prose.map((prose) => {
//         <p></p>;
//       })}
//     </div>
//     <FullAV
//       location="/games/tenjin/tenjin_race.webm"
//       fallback={raceFallback}
//       caption={t('captions.race')}
//     ></FullAV>
//     <div className="mb-1">
//       <h2 className="text-5xl mb-4">{t('background.title')}</h2>
//       <div className="prose text-lg prose-gray">
//         {tenjin.background.prose.map((paragraph, index) => (
//           <p key={index}>{paragraph}</p>
//         ))}
//       </div>
//       <div>
//         <FullAV
//           location="/games/tenjin/dino_run.webm"
//           fallback={dinoFallback}
//           caption={t('captions.dino')}
//         ></FullAV>
//       </div>
//     </div>
//     <div className="mb-4">
//       <div>
//         <h2 className="text-5xl">{t('development.title')}</h2>
//         <h3 className="text-3xl">{t('development.cutscenes.title')}</h3>
//         <div className="prose text-lg prose-gray">
//           {tenjin.development.cutscenes.prose.map((paragraph, index) => (
//             <p key={index}>{paragraph}</p>
//           ))}
//         </div>
//       </div>
//       <FullAV
//         location="/games/tenjin/panel.webm"
//         fallback={panelFallback}
//         caption={t('captions.exhibit')}
//       ></FullAV>
//       <div>
//         <h3 className="text-3xl">{t('development.runners.title')}</h3>
//         <div className="prose text-lg prose-gray">
//           {tenjin.development.runners.prose.map((paragraph, index) => (
//             <p key={index}>{paragraph}</p>
//           ))}

//           <ul>
//             {tenjin.development.runners.bullets.map((bullet, index) => (
//               <li key={index}>{bullet}</li>
//             ))}
//           </ul>

//           {tenjin.development.runners.afterBullet.map(
//             (paragraph, index) => (
//               <p>{paragraph}</p>
//             )
//           )}
//         </div>
//       </div>
//       <FullAV
//         location="/games/tenjin/exhibit.webm"
//         fallback={exhibitFallback}
//         caption={t('captions.demo')}
//         className="mb-4"
//       ></FullAV>
//       <div>
//         <h3 className="text-3xl">{t('development.arcade.title')}</h3>
//         <div className="prose text-lg prose-gray">
//           {messages.development.arcade.prose.map((paragraph, index) => (
//             <p key={index}>{paragraph}</p>
//           ))}
//         </div>
//       </div>
//       <div>
//         <h3 className="text-3xl">{t('development.advanced.title')}</h3>
//         <div className="prose text-lg prose-gray">
//           {messages.development.advanced.prose.map((paragraph, index) => (
//             <p key={index}>{paragraph}</p>
//           ))}
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
