import styles from './responsive-image.module.css'
import Image, { ImageProps, StaticImageData } from 'next/image'
 
type Props = Omit<ImageProps, 'src' | 'priority' | 'loading'> & {
  srcMobile: StaticImageData
  srcDesktop: StaticImageData
}
 
export const ResponsiveImage = (props: Props) => {
  const { srcMobile: srcMobile, srcDesktop: srcDesktop, ...rest } = props
 
  return (
    <>
      <Image {...rest} src={srcMobile} className={`${styles.imgMobile} ${props.className}`} />
      <Image {...rest} src={srcDesktop} className={`${styles.imgDesktop} ${props.className}`} />
    </>
  )
}
