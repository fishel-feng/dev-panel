import { Component } from 'solid-js';
import { DevTextItem } from '../types';

export const TextItem: Component<{ item: DevTextItem }> = (props) => {
  return (
    <div class="font-medium">{props.item.value}</div>
  );
};
