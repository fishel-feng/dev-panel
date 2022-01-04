import { Component } from 'solid-js';
import { DevSwitchItem } from '../types';

export const SwitchItem: Component<{ item: DevSwitchItem }> = (props) => {
  const handleChange = () => {
    // props.item.onChange
    const value = '';
    localStorage.setItem(`dev-panel-${props.item.key}`, value);
  }
  return (
    <div>
      <switch onChange={handleChange}></switch>
    </div>
  );
};
