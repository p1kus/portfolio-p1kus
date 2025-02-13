import styles from "./button.module.css"
import { Icon } from "@iconify/react";
type ButtonVariant = keyof typeof styles;

interface ButtonProps {
  label: string;
  variant: ButtonVariant;
  icon?: string;
}
export function Button({ label, variant, icon }: ButtonProps) {
  return (<button className={styles[variant]}>{label}
    {icon && <Icon className={styles.buttonIcon} icon={icon}></Icon>}
  </button >);
}
