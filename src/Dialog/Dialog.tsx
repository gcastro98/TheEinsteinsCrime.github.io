// import { Dialog } from "@fluentui/react";
import { useState } from "react";
import './Dialog.scss';

interface IDialogBoard {
    component: () => JSX.Element;
    hidden: boolean;
}

export function DialogBoard(props: any) {
  
  return (
    <div  className="Dialog" hidden={props.hidden}>
      {props.component()}
    </div>
  );
}
