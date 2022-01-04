import { Component } from 'solid-js';
import { DevButtonItem } from '../types';

export const ButtonItem: Component<{ item: DevButtonItem }> = (props) => {
  return (
    <button onClick={props.item.onClick}>{props.item.value}</button>
  );
};
