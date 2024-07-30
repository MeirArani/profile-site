import { Dancing_Script, Inter, Roboto_Mono, Reggae_One } from 'next/font/google';

export const dancingScript = Dancing_Script({ subsets: ['latin'] });
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export const reggaeOne = Reggae_One({
    subsets: ['latin', 'japanese'],
    weight: ['400'],
    display: 'swap',
})