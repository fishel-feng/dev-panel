import { Component } from "solid-js";
import { DevInputItem } from "../types";

export const InputItem: Component<{ item: DevInputItem }> = (props) => {
  const handleChange = (e: any) => {
    console.log(e);
    if (props.item.onChange) {
      props.item.onChange(e.srcElement.value);
    }
    localStorage.setItem(`dev-panel-${props.item.key}`, e.srcElement.value);
  };
  return (
    <div class="flex items-center">
      <label class="font-medium mr-2" htmlFor={`input-el-${props.item.key}`}>
        {props.item.label}
      </label>
      <input
        onInput={handleChange}
        value={localStorage.getItem(`dev-panel-${props.item.key}`) || ''}
        class="px-2 rounded-md"
        placeholder={props.item.placeholder}
        id={`input-el-${props.item.key}`}
      />
    </div>
  );
};
