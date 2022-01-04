import { Component } from 'solid-js';
import { DevTextItem } from '../types';

export const TextItem: Component<{ item: DevTextItem }> = (props) => {
  return (
    <div>{props.item.value}</div>
  );
};
