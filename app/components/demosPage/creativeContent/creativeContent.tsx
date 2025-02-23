import styles from "../demosPage.module.css"
import shared from "../../sharedSection.module.css"
import { images } from "~/utils/assets";
import { ZoomableImage } from "../zoomableImage";
import { HorizontalLine } from "~/components/horizontalLine/horizontalLine";

export default function CreativeContent() {
  return (
    <section>
      <div className={styles.projectSection}>
        <div className={styles.projectImageContainer}>
          <div className="grid grid-cols-1 grid-rows-1 gap-4">
            <ZoomableImage imageId={1} image={images.wip.workInProgress} alt="Alt" className="w-full col-span-2"></ZoomableImage>
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
      <HorizontalLine></HorizontalLine>
      <div className={styles.projectSection}>
        <div className={styles.projectImageContainer}>
          <div className="grid grid-cols-1 grid-rows-1 gap-4">
            <ZoomableImage imageId={1} image={images.wip.workInProgress} alt="Alt" className="w-full col-span-2"></ZoomableImage>
          </div>
        </div>
        <div className={styles.projectInfoContainer}>
          <h3></h3>
          <p></p>
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
