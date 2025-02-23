import styles from "./button.module.css"
import { Icon } from "@iconify/react";
type ButtonVariant = keyof typeof styles;

interface ButtonProps {
  label: string;
  variant: ButtonVariant;
  icon?: string;
  id: string,
}
export function Button({ label, variant, icon, id }: ButtonProps) {
  return (<a href="" className={styles[variant]} id={id}>{label}
    {icon && <Icon className={styles.buttonIcon} icon={icon} id={id}></Icon>}
  </a >);
}
