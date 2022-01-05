import { Component } from "solid-js";
import { DevPanel } from "..";
import { DevSwitchItem } from "../types";

export const SwitchItem: Component<{ item: DevSwitchItem }> = (props) => {
  const handleChange = (e: any) => {
    if (props.item.onChange) {
      props.item.onChange(e.srcElement.checked);
    }
    localStorage.setItem(`dev-panel-${props.item.key}`, e.srcElement.checked);
  };
  return (
    <div class="flex items-center">
      <label class="font-medium mr-2" htmlFor={`input-el-${props.item.key}`}>{props.item.label}</label>
      <input
        checked={DevPanel.getItem(props.item.key) === 'true' || false}
        type="checkbox"
        onChange={handleChange}
        id={`input-el-${props.item.key}`}
      />
    </div>
  );
};
