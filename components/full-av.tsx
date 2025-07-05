'use client';
import Image, { StaticImageData } from 'next/image';
import { FallbackImage } from './fallback-image';
import { useInView } from 'react-intersection-observer';
import React from 'react';

export function FullAV(props: {
  src: string;
  fallback: StaticImageData;
  className: string;
  dark: boolean;
  caption: string;
}) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    onChange: (inView, entry) =>
      inView
        ? (entry.target as HTMLVideoElement).play().catch((e) => {})
        : (entry.target as HTMLVideoElement).pause(),
  });

  const image = (
    <Image src={props.fallback} className="md:rounded-xl" alt=""></Image>
  );

  const video = (
    <video
      ref={ref}
      loop={inView}
      muted
      autoPlay={inView}
      playsInline
      src={props.src}
      className="w-full md:rounded-xl not-prose"
      poster={props.fallback.src}
    >
      {image}
    </video>
  );

  const content = props.src != null ? video : image;

  return (
    <div
      className={`relative flex flex-col items-center -ml-6 md:ml-0 w-screen md:w-full mt-8 ${props.className}`}
    >
      {content}
      <p
        className={`mx-4 prose ${
          props.dark != null ? 'prose-invert' : 'prose-gray'
        } mt-1 text-sm md:text-base text-center`}
      >
        {props.caption != null ? props.caption : ''}
      </p>
    </div>
  );
}
