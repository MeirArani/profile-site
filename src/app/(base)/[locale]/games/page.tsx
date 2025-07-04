('');

import tenjinBackground from '@/public/games/tenjin/tenjin_background.webp';
import { FullBanner } from 'components/wide-poster';
import EZBackground from '@/public/games/ez/bannerbackground.webp';
import BeautyBackground from '@/public/games/beauty/KeyProto.webp';
import { EnemyZeroLogo, TenjinLogo, BeautyLogo } from 'components/logos';

export default function Page({ params: locale }) {
  return (
    <section>
      <h1 className="text-5xl">Games</h1>
      <div>
        <h2 className="font-light text-3xl">Completed Projects</h2>
        <FullBanner
          href="/games/tenjin"
          backgroundImg={tenjinBackground}
          logo={<TenjinLogo />}
          title="Tenjin"
        ></FullBanner>
      </div>
      <div>
        <h2 className="font text-4xl">Prototypes</h2>
        <div>
          <FullBanner
            href="/games/enemyzero"
            backgroundImg={EZBackground}
            logo={<EnemyZeroLogo />}
            title="EnemyZero"
          ></FullBanner>
          <FullBanner
            href="/games/beauty"
            backgroundImg={BeautyBackground}
            logo={<BeautyLogo />}
            title="Beauty"
          ></FullBanner>
        </div>
      </div>
      <div>
        <h2 className="font text-4xl">Concepts</h2>
        <div>
          <h3 className="font font-light text-3xl">
            <i>Grace Beneath The Pines</i>
          </h3>
          <h3 className="font font-light text-3xl">
            <i>Corporate Ladder</i>
          </h3>
          <h3 className="font font-light text-3xl">
            <i>Bad Houses</i>
          </h3>
        </div>
      </div>
    </section>
  );
}
