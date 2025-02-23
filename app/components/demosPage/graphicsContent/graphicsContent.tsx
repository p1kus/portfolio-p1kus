import styles from "../demosPage.module.css"
import { images } from "~/utils/assets"
import shared from "../../sharedSection.module.css"
import { ZoomableImage } from "../zoomableImage";
import { HorizontalLine } from "~/components/horizontalLine/horizontalLine";
import vidPreview from "../../../assets/logoPreview2.mp4"
import { useTheme } from "~/ThemeContext";
import { en } from "~/translations/en/en";
import { pl } from "~/translations/pl/pl";

export default function GraphicsContent() {
  const { language } = useTheme();
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
          <h3>{language === "en" ? en.demos.graphic.hoodies.heading : pl.demos.graphic.hoodies.heading}</h3>
          <p>{language === "en" ? en.demos.graphic.hoodies.desc : pl.demos.graphic.hoodies.desc}</p>
        </div>
      </div>
      <HorizontalLine></HorizontalLine>
      <div className={styles.projectSection}>
        <div className={styles.projectImageContainer}>
          <video width="450" autoPlay loop className={styles.video}>
            <source src={vidPreview} type="video/mp4" />
          </video>

        </div>
        <div className={styles.projectInfoContainer}>
          <h3>{language === "en" ? en.demos.graphic.logoEffect.heading : pl.demos.graphic.logoEffect.heading}</h3>
          <p>{language === "en" ? en.demos.graphic.logoEffect.desc : pl.demos.graphic.logoEffect.desc}</p>
        </div>
      </div>
      <HorizontalLine></HorizontalLine>
      <div className={styles.projectSection}>
        <div className={styles.projectImageContainer}>
          <div className="grid grid-cols-2 grid-rows-1 gap-4">
            <ZoomableImage imageId={5} image={images.automotiveVis.bmwPreview4} alt="Alt" className="bg-white w-full col-span-2 object-cover"></ZoomableImage>
            <ZoomableImage imageId={6} image={images.automotiveVis.lexPreview1} alt="Alt" className="bg-white w-full aspect-[8/5] object-cover"></ZoomableImage>
            <ZoomableImage imageId={7} image={images.automotiveVis.porschPreview1} alt="Alt" className="bg-white w-full aspect-[8/5] object-cover"></ZoomableImage>
          </div>
        </div>
        <div className={styles.projectInfoContainer}>
          <h3>{language === "en" ? en.demos.graphic.automotiveVis.heading : pl.demos.graphic.automotiveVis.heading}</h3>
          <p>{language === "en" ? en.demos.graphic.automotiveVis.desc : pl.demos.graphic.automotiveVis.desc}</p>
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
          <h3>{language === "en" ? en.demos.graphic.watermark.heading : pl.demos.graphic.watermark.heading}</h3>
          <p>{language === "en" ? en.demos.graphic.watermark.desc : pl.demos.graphic.watermark.desc}</p>
        </div>
      </div>
      <HorizontalLine></HorizontalLine>
      <div className={styles.projectSection}>
        <div className={styles.projectImageContainer}>
          <ZoomableImage imageId={12} image={images.stamp.stampPreview1} alt="Alt" className="w-full object-contain"></ZoomableImage>
        </div>
        <div className={styles.projectInfoContainer}>
          <h3>{language === "en" ? en.demos.graphic.stamp.heading : pl.demos.graphic.stamp.heading}</h3>
          <p>{language === "en" ? en.demos.graphic.stamp.desc : pl.demos.graphic.stamp.desc}</p>
        </div>
      </div>
    </section >);
}
