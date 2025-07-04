import desktopImage from '@/photos/photography/multiples1.webp';
import mobileImage from '@/photos/photography/hanami.webp';
import { ResponsiveImage } from 'components/responsive-image';
import { ArrowIcon } from 'components/arrow-icon';
import { getMessages } from './messages';

export default async function Page({
  params,
}: {
  params: Promise<{ locale: 'en' | 'ja' }>;
}) {
  const { locale } = await params;
  const messages = await getMessages(locale);
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-medium text-4xl tracking-tighter text-center w-fit">
        {messages.Home.greeting}
      </h1>
      <div className="my-4 md:w-[90%] lg:w-[75%] xl:w-[50%]">
        <ResponsiveImage
          srcDesktop={desktopImage}
          srcMobile={mobileImage}
          alt="Hi."
          style={{
            //objectFit: 'cover', // cover, contain, none
            width: '100%',
            height: 'auto',
          }}
          placeholder="blur"
          className="rounded-lg"
          classnamedesktop="w-full"
          classnamemobile="w-full"
        ></ResponsiveImage>
      </div>
      <h1 className="font-medium color-blue text-3xl mb-4 tracking-tighter text-center w-fit">
        {messages.Home.followUp}
      </h1>

      <div>
        <p className="prose prose-2xlg mb-2">{messages.Home.intro}</p>
      </div>

      <ul className="font-sm w-full mt-5 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300 md:w-fit">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/mappingthestatic/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">follow me</p>
          </a>
        </li>
      </ul>
    </div>
  );
}
