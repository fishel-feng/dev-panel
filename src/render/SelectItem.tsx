import { Component, For } from "solid-js";
import { DevSelectItem } from "../types";

export const SelectItem: Component<{ item: DevSelectItem }> = (props) => {
  const handleChange = (e: any) => {
    let newVal;
    if (props.item.multiple) {
      const list = localStorage
        .getItem(`input-el-${props.item.key}`)
        ?.split(",");
      if (!list) {
        newVal = [e.srcElement.value];
      } else if (list.includes(e.srcElement.value)) {
        newVal = list.filter((i) => i !== e.srcElement.value);
      } else {
        list.push(e.srcElement.value);
        newVal = list;
      }
    } else {
      if (e.srcElement.checked) {
        newVal = e.srcElement.value;
      }
    }
    if (props.item.onChange) {
      props.item.onChange(newVal);
    }
    localStorage.setItem(`input-el-${props.item.key}`, newVal);
    // input-el-${props.item.key}
  };
  return (
    <div class="flex items-center">
      <label class="font-medium mr-2">{props.item.label}</label>
      <For each={props.item.options}>
        {(i) => (
          <>
            <label
              class="text-gray-800 mr-1"
              htmlFor={`input-el-${props.item.key}-${i.value}`}
            >
              {i.label}
            </label>
            <input
              onChange={handleChange}
              checked={localStorage
                .getItem(`input-el-${props.item.key}`)
                ?.split(",")
                ?.includes(i.value)}
              class="text-slate-900 mr-2"
              type={props.item.multiple ? "checkbox" : "radio"}
              id={`input-el-${props.item.key}-${i.value}`}
              value={i.value}
              name={`input-el-${props.item.key}`}
            />
          </>
        )}
      </For>
    </div>
  );
};
