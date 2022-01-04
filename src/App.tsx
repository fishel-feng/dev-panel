import {
  Component,
  createSignal,
  For,
  Match,
  onMount,
  Show,
  Switch,
} from "solid-js";
import { ButtonItem } from "./render/ButtonItem";
import { SelectItem } from "./render/SelectItem";
import { MapItem } from "./render/MapItem";
import { SwitchItem } from "./render/SwitchItem";
import { TextItem } from "./render/TextItem";
import {
  DevButtonItem,
  DevInputItem,
  DevItem,
  DevMapItem,
  DevSelectItem,
  DevSwitchItem,
  DevTextItem,
} from "./types";
import { InputItem } from "./render/InputItem";
import "./index.css";

const App: Component<{ content: DevItem[]; plugins: any[] }> = (props) => {
  onMount(() => {
    console.log(33333);
  });
  createSignal(() => {
    // props.plugins
  });

  return (
    <div class="w-full h-full bg-slate-900/25 rounded-md p-2 shadow-md relative">
      <For each={props.content}>
        {(item) => (
          <Switch>
            <Match when={item.type === "text"}>
              <TextItem item={item as DevTextItem} />
            </Match>
            <Match when={item.type === "map"}>
              <MapItem item={item as DevMapItem} />
            </Match>
            <Match when={item.type === "button"}>
              <ButtonItem item={item as DevButtonItem} />
            </Match>
            <Match when={item.type === "switch"}>
              <SwitchItem item={item as DevSwitchItem} />
            </Match>
            <Match when={item.type === "select"}>
              <SelectItem item={item as DevSelectItem} />
            </Match>
            <Match when={item.type === "input"}>
              <InputItem item={item as DevInputItem} />
            </Match>
          </Switch>
        )}
      </For>
    </div>
  );
};

export default App;
