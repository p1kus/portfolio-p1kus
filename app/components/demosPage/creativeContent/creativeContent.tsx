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
            <ZoomableImage imageId={1} image={images.wip.workInProgress} alt="Work in progress image" className="w-full col-span-2"></ZoomableImage>
          </div>
        </div>
        <div className={styles.projectInfoContainer}>
          <h3>Counter Strike Fragmovie</h3>
          <p>A hobby project, oldschool style Counter Strike fragmovie, made and edited in Adobe Premiere.</p>
        </div>
      </div>
      <HorizontalLine></HorizontalLine>
      <div className={styles.projectSection}>
        <div className={styles.projectImageContainer}>
          <div className="grid grid-cols-1 grid-rows-1 gap-4">
            <ZoomableImage imageId={1} image={images.wip.workInProgress} alt="Work in progress image" className="w-full col-span-2"></ZoomableImage>
          </div>
        </div>
        <div className={styles.projectInfoContainer}>
          <h3></h3>
          <p></p>
        </div>
      </div>
      <HorizontalLine></HorizontalLine>
      <div className={styles.projectSection}>
        <div className={styles.projectImageContainer}>
          <div className="grid grid-cols-1 grid-rows-1 gap-4">
            <ZoomableImage imageId={1} image={images.wip.workInProgress} alt="Work in progress image" className="w-full col-span-2"></ZoomableImage>
          </div>
        </div>
        <div className={styles.projectInfoContainer}>
          <h3></h3>
          <p></p>
        </div>
      </div>
    </section >);
}
