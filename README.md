# Dev Panel
A library for you to build a develop panel easily.

## Install
```
npm i develop-panel
```
or
```
yarn add develop-panel
```
or
```
pnpm i develop-panel
```

## Usage
```javascript
import { DevPanel } from 'develop-panel';
DevPanel.create({
    el: 'hahaha',
    plugins: ['reload'],
    content: [
    {
        type: 'text',
        value: '这时一个调试页面',
    },
    {
        type: 'map',
        label: '用户名',
        value: 'test-user',
    },
    {
        type: 'button',
        value: '点我触发功能',
        onClick: () => {
            console.log('233');
        },
    },
    {
        type: 'switch',
        label: '开启功能',
        key: 'open',
        default: false,
        onChange: (val) => {
            console.log(val);
        },
    },
    {
        type: 'select',
        label: '单选',
        key: 'one',
        options: [
            {
                label: '选项1',
                value: '0',
            },
            {
                label: '选项2',
                value: '1',
            },
            {
                label: '选项3',
                value: '2',
            },
        ],
        onChange: (val) => {
            console.log(val);
        },
    },
    {
        type: 'select',
        label: '多选',
        multiple: true,
        key: 'two',
        options: [
            {
                label: '选项1',
                value: '0',
            },
            {
                label: '选项2',
                value: '1',
            },
            {
                label: '选项3',
                value: '2',
            },
        ],
        onChange: (val) => {
            console.log(val);
        },
    },
    {
        type: 'input',
        label: '输入 ID',
        key: 'id',
        default: '',
        placeholder: '输入 ID',
        onChange: (val) => {
            console.log(val);
        },
    },
    ],
}).render(true);
```
