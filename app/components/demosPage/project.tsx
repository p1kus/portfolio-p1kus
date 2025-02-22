import shared from "../sharedSection.module.css"
import styles from "./demosPage.module.css"

interface ProjectProps {
  children?: React.ReactNode;
  imageSrc: string[],
  title: string,
  desc: string
}

export default function Project({ children, imageSrc, title, desc }: ProjectProps) {
  return (
    <div className={styles.projectSection}>
      <div className={styles.projectImageContainer}>
        {imageSrc.map((source: string, index: number): React.ReactNode => (
          <img key={index} src={source} alt="Screenshot of a project" className={shared.sectionImg} />))}
      </div>
      <div className={styles.projectInfoContainer}>
        <h3>{title}</h3>
        <p>{desc}</p>
        {children}
      </div>
    </div>
  );
}
