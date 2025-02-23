import styles from "./button.module.css"
import { Icon } from "@iconify/react";
import { NavLink } from "react-router";
type ButtonVariant = keyof typeof styles;

interface ButtonProps {
  label: string;
  variant: ButtonVariant;
  icon?: string;
  id: string,
}
export function Button({ label, variant, icon, id }: ButtonProps) {
  return (<NavLink to="/demos" className={styles[variant]} id={id}>{label}
    {icon && <Icon className={styles.buttonIcon} icon={icon} id={id}></Icon>}
  </NavLink >);
}
