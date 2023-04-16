import { TextField } from "@fluentui/react";

export function Create(): JSX.Element {
  return (
    <div>
      <span>¡Comparte este enlace para jugar con tus amigos!</span>
      <TextField value={"https://theeinsteinscrime.web.app/"} />
    </div>
  );
}
