import { Link } from '@/i18n/navigation';
import { ReactNode } from 'react';

// These tags are available
type Tag =
  | 'p'
  | 'b'
  | 'i'
  | 'kuma'
  | 'serious'
  | 'nikken'
  | 'tenjinArticle'
  | 'shiloh'
  | 'sega'
  | 'resola'
  | 'li'
  | 'e0'
  | 'br';

type Props = {
  children(tags: Record<Tag, (chunks: ReactNode) => ReactNode>);
  invert?: boolean;
  notProse?: boolean;
};

export default function RichText({
  children,
  invert = false,
  notProse = true,
}: Props) {
  return (
    <div
      className={`${notProse == true ? '' : 'prose'} ${
        invert == true ? 'prose-invert' : ''
      }`}
    >
      {children({
        p: (chunks: ReactNode) => <p>{chunks}</p>,
        b: (chunks: ReactNode) => <b className="font-semibold">{chunks}</b>,
        i: (chunks: ReactNode) => <i className="italic">{chunks}</i>,
        li: (chunks: ReactNode) => <li>{chunks}</li>,
        br: () => <br></br>,
        kuma: (chunks: ReactNode) => (
          <a href="https://hyoka.ofc.kyushu-u.ac.jp/search/details/K002398/english.html">
            {chunks}
          </a>
        ),
        serious: (chunks: ReactNode) => (
          <a href="https://en.wikipedia.org/wiki/Serious_game">{chunks}</a>
        ),
        nikken: (chunks: ReactNode) => (
          <Link href="https://www.nikken.co.jp/" target="_blank">
            {chunks}
          </Link>
        ),
        tenjinArticle: (chunks: ReactNode) => (
          <Link
            href="https://built.itmedia.co.jp/bt/articles/2301/30/news178_2.html"
            target="_blank"
          >
            {chunks}
          </Link>
        ),
        shiloh: (chunks: ReactNode) => (
          <Link href="https://www.instagram.com/shilohbeeler/" target="_blank">
            {chunks}
          </Link>
        ),
        sega: (chunks: ReactNode) => (
          <Link
            href="https://www.youtube.com/watch?v=6PqjBPGAFo0"
            target="_blank"
          >
            {chunks}
          </Link>
        ),
        resola: (chunks: ReactNode) => (
          <Link href="https://resolatenjin.jp/hall/" target="_blank">
            {chunks}
          </Link>
        ),
        e0: (chunks: ReactNode) => <i className="text-red-700">{chunks}</i>,
      })}
    </div>
  );
}
