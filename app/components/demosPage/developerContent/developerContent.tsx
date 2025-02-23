import styles from "../demosPage.module.css"
import { HorizontalLine } from "~/components/horizontalLine/horizontalLine";
import { ZoomableImage } from "../zoomableImage"
import { images } from "~/utils/assets"
import { ProjectLink } from "~/components/projectLink/projectLink"
import { useTheme } from "~/ThemeContext";
import { en } from "~/translations/en/en";
import { pl } from "~/translations/pl/pl";

export default function DeveloperContent() {
  const { language } = useTheme();
  return (
    <section>
      <div className={styles.projectSection}>
        <div className={styles.projectImageContainer}>
          <div className="grid grid-cols-1 grid-rows-2 gap-10">
            <ZoomableImage imageId={1} image={images.chatspace.chatspacePreview1} alt="Screenshot of a web chat application" className="w-full aspect-[4/3] object-cover"></ZoomableImage>
            <ZoomableImage imageId={2} image={images.chatspace.chatspacePreview2} alt="Screenshot of a web chat application" className="w-full aspect-[4/3] object-cover"></ZoomableImage>
          </div>
        </div>
        <div className={styles.projectInfoContainer}>
          <h3>Chatspace</h3>
          <p>{language === "en" ? en.demos.dev.chatspace.desc : pl.demos.dev.chatspace.desc}</p>
          <h4>{language === "en" ? en.demos.dev.chatspace.techStackHeading : pl.demos.dev.chatspace.techStackHeading}</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Node.JS</li>
            <li>Socket.IO</li>
          </ul>
          <h4>{language === "en" ? en.demos.dev.chatspace.featuresHeading : pl.demos.dev.chatspace.featuresHeading}</h4>
          <ul>
            {language === "en" ? en.demos.dev.chatspace.featuresContent.map(element => <li>{element}</li>)
              : pl.demos.dev.chatspace.featuresContent.map(element => <li>{element}</li>)}
          </ul>
          <ProjectLink gitLink="https://github.com/p1kus/chatspace"></ProjectLink>
        </div>
      </div>
      <HorizontalLine></HorizontalLine>
      <div className={styles.projectSection}>
        <div className={styles.projectImageContainer}>
          <div className="grid grid-cols-1 grid-rows-1 gap-10">
            <ZoomableImage imageId={3} image={images.colorPerfect.colorPreview1} alt="Screenshot of a web chat application" className="w-full aspect-[4/3] object-cover"></ZoomableImage>
            {/* <ZoomableImage imageId={4} image={images.colorPerfect.colorPreview2} alt="Screenshot of a web chat application" className="w-full aspect-[4/3] object-cover"></ZoomableImage> */}
          </div>
        </div>
        <div className={styles.projectInfoContainer}>
          <h3>Perfect Color</h3>
          <p>{language === "en" ? en.demos.dev.perfectColor.desc : pl.demos.dev.perfectColor.desc}</p>
          <h4>{language === "en" ? en.demos.dev.chatspace.techStackHeading : pl.demos.dev.chatspace.techStackHeading}</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>TypeScript</li>
          </ul>
          <h4>{language === "en" ? en.demos.dev.chatspace.featuresHeading : pl.demos.dev.chatspace.featuresHeading}</h4>
          <ul>
            {language === "en" ? en.demos.dev.perfectColor.featuresContent.map(element => <li>{element}</li>)
              : pl.demos.dev.perfectColor.featuresContent.map(element => <li>{element}</li>)}
          </ul>
          <ProjectLink link="https://p1kus.github.io/perfectcolor/" gitLink="https://github.com/p1kus/perfectcolor"></ProjectLink>
        </div>
      </div>
      <HorizontalLine></HorizontalLine>
      <div className={styles.projectSection}>
        <div className={styles.projectImageContainer}>
          <div className="grid grid-cols-1 grid-rows-2 gap-10">
            <ZoomableImage imageId={5} image={images.portfolio.portfolioPreview1} alt="Preview of a portfolio website" className="w-full aspect-[4/3] object-cover"></ZoomableImage>
            <ZoomableImage imageId={6} image={images.portfolio.portfolioPreview2} alt="Preview of a portfolio website" className="w-full aspect-[4/3] object-cover"></ZoomableImage>
          </div>
        </div>
        <div className={styles.projectInfoContainer}>
          <h3>Portfolio</h3>
          <p>{language === "en" ? en.demos.dev.portfolio.desc : pl.demos.dev.portfolio.desc}</p>
          <h4>{language === "en" ? en.demos.dev.portfolio.techStackHeading : pl.demos.dev.portfolio.techStackHeading}</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>CSS Modules</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>React Router</li>
            <li>Vite</li>
          </ul>
          <h4>{language === "en" ? en.demos.dev.chatspace.featuresHeading : pl.demos.dev.chatspace.featuresHeading}</h4>
          <ul>
            {language === "en" ? en.demos.dev.portfolio.featuresContent.map(element => <li>{element}</li>)
              : pl.demos.dev.portfolio.featuresContent.map(element => <li>{element}</li>)}
          </ul>
          <ProjectLink link="https://www.piotrpopiolek.pl" gitLink="https://github.com/p1kus/portfolio-p1kus"></ProjectLink>
        </div>
      </div>
      <HorizontalLine></HorizontalLine>
      <div className={styles.projectSection}>
        <div className={styles.projectImageContainer}>
          <div className="grid grid-cols-1 grid-rows-2 gap-10">
            <ZoomableImage imageId={7} image={images.uxp.uxpPreview1} alt="Screenshot of a web chat application" className="w-full aspect-[4/3] object-cover"></ZoomableImage>
            <ZoomableImage imageId={8} image={images.uxp.uxpPreview2} alt="Screenshot of a web chat application" className="w-full aspect-[4/3] object-cover"></ZoomableImage>
          </div>
        </div>
        <div className={styles.projectInfoContainer}>
          <h3>UXP-Toolkit</h3>
          <p>{language === "en" ? en.demos.dev.uxpToolkit.desc : pl.demos.dev.uxpToolkit.desc}</p>
          <h4>{language === "en" ? en.demos.dev.uxpToolkit.techStackHeading : pl.demos.dev.uxpToolkit.techStackHeading}</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Adobe UXP Developer Tools</li>
          </ul>
          <h4>{language === "en" ? en.demos.dev.chatspace.featuresHeading : pl.demos.dev.chatspace.featuresHeading}</h4>
          <ul>
            {language === "en" ? en.demos.dev.uxpToolkit.featuresContent.map(element => <li>{element}</li>) : pl.demos.dev.uxpToolkit.featuresContent.map(element => <li>{element}</li>)}
          </ul>
          <ProjectLink link="" gitLink="https://github.com/p1kus/uxp-toolkit"></ProjectLink>
        </div>
      </div>
      <HorizontalLine></HorizontalLine>
      <div className={styles.projectSection}>
        <div className={styles.projectImageContainer}>
          <div className="grid grid-cols-1 grid-rows-1 gap-0">
            <ZoomableImage imageId={9} image={images.ddc.ddcPreview1} alt="Screenshot of a web chat application" className="w-full aspect-[4/3] object-cover"></ZoomableImage>
          </div>
        </div>
        <div className={styles.projectInfoContainer}>
          <h3>JsProductToWooCart</h3>
          <p>{language === "en" ? en.demos.dev.wooCart.desc : pl.demos.dev.wooCart.desc}</p>
          <h4>{language === "en" ? en.demos.dev.wooCart.techStackHeading : pl.demos.dev.wooCart.techStackHeading}</h4>
          <ul>
            <li>PHP</li>
            <li>WooCommerce</li>
            <li>JavaScript</li>
          </ul>
          <h4>{language === "en" ? en.demos.dev.chatspace.featuresHeading : pl.demos.dev.chatspace.featuresHeading}</h4>
          <ul>
            {language === "en" ? en.demos.dev.wooCart.featuresContent.map(element => <li>{element}</li>) : pl.demos.dev.wooCart.featuresContent.map(element => <li>{element}</li>)}
          </ul>
          <ProjectLink link="https://ddcdrewdom.pl/zaprojektuj/" gitLink="https://github.com/p1kus/JsProductToWooCart"></ProjectLink>
        </div>
      </div>
    </section >
  );
}
