import { Icon, PrimaryButton } from "@fluentui/react";
import styles from "./CustomSelector.module.scss";
import { useState } from "react";

export interface ICustomSelector {
  text: string;
  onClick: () => void;
}

export function CustomSelector({options}: {options: ICustomSelector[]}): JSX.Element {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => {
      let index = (prev + 1) % options.length;
      options[index].onClick();
      return index;
    });
  };

  const prev = () => {
    setActive((prev) => {
      let index = (prev - 1 + options.length) % options.length;
      options[index].onClick();
      return index;
    });
   
  };

  return (
    <div className={styles.customSelector}>
      <span onClick={() => prev()}>
        <Icon iconName="chevronleft" />
      </span>
      <span onClick={() => options[active]?.onClick()}> {options[active]?.text} </span>
      <span onClick={() => next()}>
        <Icon iconName="chevronright" />
      </span>
    </div>
  );
}
