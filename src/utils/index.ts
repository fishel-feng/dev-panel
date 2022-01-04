import { JSX } from "solid-js/jsx-runtime";
import { render } from "solid-js/web";

export function appendIntoEl(id: string, component: () => JSX.Element, el: HTMLElement) {
  const div = document.createElement('div');
  div.id = `dev-panel-plugin-${id}`;
  (el.firstChild || el).appendChild(div);
  render(component, div);
}
