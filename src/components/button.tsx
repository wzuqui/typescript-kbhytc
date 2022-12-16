import { React } from "../lib/react";

export function Button(props?: { texto: any; onClick: Function }) {
  return <button onclick={props.onClick}>{props.texto}</button>;
}
