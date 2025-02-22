import styles from "../demosPage.module.css"
import shared from "../../sharedSection.module.css"
import { images } from "~/utils/assets";
import { ZoomableImage } from "../zoomableImage";

export default function CreativeContent() {
  return (
    <section>
      <div className={styles.projectSection}>
        <div className={styles.projectImageContainer}>
          <div className="grid grid-cols-2 grid-rows-2">
            <ZoomableImage imageId={1} image={images.hoodies.hoodiePreview1} alt="Alt" className="w-full col-span-2"></ZoomableImage>
            <ZoomableImage imageId={2} image={images.hoodies.hoodiePreview2} alt="Alt" className="sectionImg"></ZoomableImage>
            <ZoomableImage imageId={3} image={images.hoodies.hoodiePreview3} alt="Alt" className="sectionImg"></ZoomableImage>
            <ZoomableImage imageId={4} image={images.hoodies.hoodiePreview4} alt="Alt" className="sectionImg"></ZoomableImage>
          </div>
        </div>
        <div className={styles.projectInfoContainer}>
          <h3>Counter Strike Fragmovie</h3>
          <p>A passion project, oldschool style Counter Strike fragmovie, made and edited in Adobe Premiere.</p>
          <h4>Tech Stack</h4>
          <ul>
            <li></li>
          </ul>
          <h4>Key features</h4>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
      <div className={styles.projectSection}>
        <div className={styles.projectImageContainer}>
          <ZoomableImage imageId={2} image={images.hoodies.hoodiePreview1} alt="Alt"></ZoomableImage>
        </div>
        <div className={styles.projectInfoContainer}>
          <h3>Counter Strike Fragmovie</h3>
          <p>A passion project, oldschool style Counter Strike fragmovie, made and edited in Adobe Premiere.</p>
          <h4>Tech Stack</h4>
          <ul>
            <li></li>
          </ul>
          <h4>Key features</h4>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
      <div className={styles.projectSection}>
        <div className={styles.projectImageContainer}>
          <ZoomableImage imageId={3} image={images.hoodies.hoodiePreview3} alt="Alt"></ZoomableImage>
        </div>
        <div className={styles.projectInfoContainer}>
          <h3>Counter Strike Fragmovie</h3>
          <p>A passion project, oldschool style Counter Strike fragmovie, made and edited in Adobe Premiere.</p>
          <h4>Tech Stack</h4>
          <ul>
            <li></li>
          </ul>
          <h4>Key features</h4>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </section >);
}
