import { useState } from "react"

import shared from "../sharedSection.module.css"
import styles from "./zoomableImage.module.css"

interface ZoomableImageProps {
  imageId: number,
  image: string,
  alt: string,
  className?: string
}

export function ZoomableImage({ imageId, image, alt, className }: ZoomableImageProps) {
  const zoom = (imageId: number) => {
    setZoomId((imageId))
  }
  const [zoomId, setZoomId] = useState(0)

  return (
    <>
      <img src={image} alt={alt} onClick={() => zoom(imageId)} id={`${imageId}`} className={`${shared.sectionImg} ${className}`} />
      {zoomId === imageId && (<div className={styles.zoomBox}>
        <img src={image} alt={alt} onClick={() => zoom(0)} id={`${imageId}`} className={styles.imgZoom} />
      </div>)}
    </>
  )
}
