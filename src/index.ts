import { render } from "solid-js/web";
import App from "./App";
import html from 'solid-js/html';
import { DevItem } from "./types";
import './index.css';

interface DevPanelProps {
    el: string;
    plugins: string[];
    content: DevItem[];
}

export class DevPanel {
    private element: HTMLElement;
    private plugins: string[] | { name: string, options: {} }[] = [];
    private pluginFuns: (() => void)[] = [];
    private content: DevItem[] = [];

    constructor(props: DevPanelProps) {
        const { el, plugins, content } = props;
        let element = document.getElementById(el);
        if (!element) {
            // throw new Error('connot find node by the id ' + el);
            this.element = document.body;
        } else {
            this.element = element;
        }
        this.plugins = plugins;
        this.content = content;
    }

    private async loadPlugins() {
        if (!this.plugins || !this.plugins.length) {
            return;
        }
        for (const plugin of this.plugins) {
            if (typeof plugin === 'string') {
                // load from plugins
                const fn = await import(`./plugins/${plugin}`);
                this.pluginFuns.push(fn);
            } else {
                if (typeof plugin.name === 'string') {
                    const pfn = await import(`./plugins/${plugin}`);
                    this.pluginFuns.push(pfn(plugin.options));
                } else {
                    throw new Error('load plugin error, please check the plugin name');
                }
            }
        }
    }

    public async render() {
        await this.loadPlugins();
        render(() => html`<App content=${this.content} plugins=${this.pluginFuns} />`, this.element);
    }
}

export function getItem(key: string) {
    return localStorage.getItem(`dev-panel-${key}`);
}


new DevPanel({
    el: '',
    plugins: ['browser'],
    content: [
        {
            type: 'text',
            value: '',
        },
        {
            type: 'map',
            label: '',
            value: '',
        },
        {
            type: 'button',
            value: '',
            onClick: () => {},
        },
        {
            type: 'switch',
            label: '',
            key: '',
            default: false,
            onChange: (val: boolean) => {
                console.log(val);
            },
        },
        {
            type: 'select',
            label: '',
            key: '',
            options: [
                {
                    text: '',
                    value: '',
                },
                {
                    text: '',
                    value: '',
                },
            ],
            onChange: (val: string) => {
                console.log(val);
            },
        },
        {
            type: 'input',
            label: '',
            key: '',
            default: '',
            placeholder: '',
            onChange: (val: string) => {
                console.log(val);
            },
        },
    ],
}).render();
