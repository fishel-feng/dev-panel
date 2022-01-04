import { Component } from 'solid-js';
import { DevMapItem } from '../types';

export const MapItem: Component<{ item: DevMapItem }> = (props) => {
  return (
    <div>
        <div>
            {props.item.label}
        </div>
        <div>
            {props.item.value}
        </div>
    </div>
  );
};
