import { Component } from 'solid-js';
import { DevMapItem } from '../types';

export const MapItem: Component<{ item: DevMapItem }> = (props) => {
  return (
    <div class="flex items-center">
        <div class="font-medium mr-2">
            {props.item.label}
        </div>
        <div class="text-neutral-800">
            {props.item.value}
        </div>
    </div>
  );
};
