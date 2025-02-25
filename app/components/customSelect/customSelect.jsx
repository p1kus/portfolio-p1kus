
import * as React from "react";
import { useState } from "react";
import { Select } from "radix-ui";
import classnames from "classnames";
import styles from "./customSelect.module.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useTheme } from "~/ThemeContext";


const CustomSelect = ({ onValueChange }) => {
  const { language } = useTheme();
  const [currentValue, setCurrentValue] = useState('developer')
  const handleValueChange = (value) => {
    setCurrentValue(value);
    onValueChange?.(value);
  }

  return (
    <Select.Root value={currentValue} onValueChange={handleValueChange} defaultValue="developer">
      <Select.Trigger className={styles.Trigger} aria-label="section">
        <Select.Value placeholder="Developer" />
        <Select.Icon className={styles.Icon}>
          <Icon icon="mdi-chevron-down"></Icon>
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className={styles.Content}>
          <Select.Viewport className={styles.Viewport}>
            <Select.Group>
              <SelectItem value="developer">{language === "en" ? "Developer" : "Developer"}</SelectItem>
              <SelectItem value="graphic">{language === "en" ? "Adobe" : "Adobe"}</SelectItem>
              <SelectItem value="creative">{language === "en" ? "Other" : "Inne"}</SelectItem>
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classnames(styles.Item, className)}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className={styles.ItemIndicator}>
          {/* <CheckIcon /> */}
          <Icon icon="material-symbols:circle" className={styles.checkIcon}></Icon>
        </Select.ItemIndicator>
      </Select.Item>
    );
  },
);

export default CustomSelect;
