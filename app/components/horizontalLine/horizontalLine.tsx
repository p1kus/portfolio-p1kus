
import styles from "./horizontalLine.module.css"
type HorizontalLineProps = {
  altStyle?: string;
}

export function HorizontalLine({ altStyle = "" }: HorizontalLineProps) {

  return (<div className={`hr ${styles.horizontalLine} ${styles[altStyle] || ""}`}>
  </div>)

}

