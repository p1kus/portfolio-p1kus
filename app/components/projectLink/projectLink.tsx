import styles from "./projectLink.module.css"
interface ProjectLinkProps {
  link?: string,
  gitLink: string
}

export function ProjectLink({ link = "", gitLink }: ProjectLinkProps) {
  return (
    <div className={styles.linkContainer}>
      {link && <a href={link} target="_blank">Live</a>}
      <a href={gitLink} target="_blank">Github</a>
    </div>
  )
}
