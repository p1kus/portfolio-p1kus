import styles from "../demosPage.module.css"
import { images } from "~/utils/assets"
import shared from "../../sharedSection.module.css"
import { ZoomableImage } from "../zoomableImage";
import { HorizontalLine } from "~/components/horizontalLine/horizontalLine";
import vidPreview from "../../../assets/logoPreview1.mp4"

export default function GraphicsContent() {
  return (
    <section>
      <div className={styles.projectSection}>
        <div className={styles.projectImageContainer}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <ZoomableImage imageId={1} image={images.hoodies.hoodiePreview1} alt="Alt" className="w-full col-span-2"></ZoomableImage>
            <ZoomableImage imageId={2} image={images.hoodies.hoodiePreview2} alt="Alt" className="w-full aspect-[5/5] object-cover"></ZoomableImage>
            <ZoomableImage imageId={3} image={images.hoodies.hoodiePreview3} alt="Alt" className="w-full aspect-[5/5] object-cover"></ZoomableImage>
          </div>
        </div>
        <div className={styles.projectInfoContainer}>
          <h3>Hoodie mockups</h3>
          <p>Hoodie mockups created in Adobe Photoshop</p>
          <h4>Tech Stack</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Node.JS</li>
            <li>Socket.IO</li>
          </ul>
        </div>
      </div>
      <HorizontalLine></HorizontalLine>
      <div className={styles.projectSection}>
        <div className={styles.projectImageContainer}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <ZoomableImage imageId={4} image={images.automotiveVis.bmwPreview1} alt="Alt" className="bg-white w-full col-span-2"></ZoomableImage>
            <ZoomableImage imageId={5} image={images.automotiveVis.bmwPreview4} alt="Alt" className="bg-white w-full col-span-2 object-cover"></ZoomableImage>
            <ZoomableImage imageId={6} image={images.automotiveVis.fordPreview3} alt="Alt" className="bg-white w-full aspect-[8/5] object-cover"></ZoomableImage>
            <ZoomableImage imageId={7} image={images.automotiveVis.lexPreview1} alt="Alt" className="bg-white w-full aspect-[8/5] object-cover"></ZoomableImage>
          </div>
        </div>
        <div className={styles.projectInfoContainer}>
          <h3>Automotive detailer visualization</h3>
          <p>A visualization edit made for a car detailer, showcasing different tiers of service. Created in Adobe Photoshop</p>
          <h4>Tech Stack</h4>
          <ul>
          </ul>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
      <HorizontalLine></HorizontalLine>
      <div className={styles.projectSection}>
        <div className={styles.projectImageContainer}>
          <video controls width="450">
            <source src={vidPreview} type="video/mp4" />
          </video>

        </div>
        <div className={styles.projectInfoContainer}>
          <h3>Logo Effect</h3>
          <p>A stamp design made from scratch, prepared and exported for printing</p>
          <ul>
            <li>HTML</li>
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
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <ZoomableImage imageId={8} image={images.watermark.watermarkPreview1} alt="Alt" className="w-full object-contain"></ZoomableImage>
            <ZoomableImage imageId={9} image={images.watermark.watermarkPreview2} alt="Alt" className="w-full object-contain"></ZoomableImage>
            <ZoomableImage imageId={10} image={images.watermark.watermarkPreview3} alt="Alt" className="w-full object-contain"></ZoomableImage>
            <ZoomableImage imageId={11} image={images.watermark.watermarkPreview4} alt="Alt" className="w-full object-contain"></ZoomableImage>
          </div>
        </div>
        <div className={styles.projectInfoContainer}>
          <h3>Watermark removal</h3>
          <p>Company logo was updated and needed to be applied onto the images displayed on the website, the original photographs were not to be found, so we had to improvise by editing the jpegs</p>
          <h4>Tech Stack</h4>
          <ul>
            <li>HTML</li>
          </ul>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
      <HorizontalLine></HorizontalLine>
      <div className={styles.projectSection}>
        <div className={styles.projectImageContainer}>
        </div>
        <div className={styles.projectInfoContainer}>
          <h3>Stamp design</h3>
          <p>A stamp design made from scratch, prepared and exported for printing</p>
          <h4>Tech Stack</h4>
          <ul>
            <li>HTML</li>
          </ul>
          <h4>Key features</h4>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
      <HorizontalLine></HorizontalLine>
    </section >);
}
