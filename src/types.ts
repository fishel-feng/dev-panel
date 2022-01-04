export interface DevTextItem {
    type: 'text';
    value: string;
}

export interface DevMapItem {
    type: 'map';
    label: string;
    value: string;
}

export interface DevButtonItem {
    type: 'button';
    value: string;
    onClick: () => void;
}

export interface DevSwitchItem {
    type: 'switch';
    label: string;
    key: string;
    default: false;
    onChange: (val: boolean) => void;
}

export interface DevSelectItem {
    type: 'select';
    label: string;
    key: string;
    options: { text: string; value: string }[];
    onChange: (val: string) => void;
}

export interface DevInputItem {
    type: 'input';
    label: string;
    key: string;
    default: string;
    placeholder: string;
    onChange: (val: string) => void;
}

export type DevItem = DevTextItem | DevMapItem | DevButtonItem | DevSwitchItem | DevSelectItem | DevInputItem;
