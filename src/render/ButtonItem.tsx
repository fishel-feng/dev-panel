import { Component } from "solid-js";
import { DevButtonItem } from "../types";

export const ButtonItem: Component<{ item: DevButtonItem }> = (props) => {
  return (
    <div>
      <button
        class="bg-blue-600 rounded-md px-2 text-slate-200 text-sm"
        onClick={props.item.onClick}
      >
        {props.item.value}
      </button>
    </div>
  );
};
