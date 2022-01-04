import { render } from "solid-js/web";
import App from "./App";
import html from "solid-js/html";
import { DevItem } from "./types";
import "./index.css";

interface DevPanelProps {
  el: string;
  plugins: string[];
  content: DevItem[];
}

export class DevPanel {
  private static element: HTMLElement;
  private static instance: DevPanel;
  private plugins: string[] | { name: string; options: {} }[] = [];
  private pluginFuns: ((el: HTMLElement) => void)[] = [];
  private content: DevItem[] = [];

  public static create(props: DevPanelProps) {
    if (!this.instance) {
      this.instance = new DevPanel(props);
    }
    return this.instance;
  }

  private constructor(props: DevPanelProps) {
    const { el, plugins, content } = props;
    let element = document.getElementById(el);
    if (!element) {
      const div = document.createElement("div");
      div.id = "dev-panel-container";
      div.style.width = "600px";
      div.style.height = "400px";
      document.body.appendChild(div);
      DevPanel.element = div;
    } else {
      DevPanel.element = element;
    }
    this.plugins = plugins;
    this.content = content;
  }

  private async loadPlugins() {
    if (!this.plugins || !this.plugins.length) {
      return;
    }
    for (const plugin of this.plugins) {
      if (typeof plugin === "string") {
        const fn = (await import(`./plugins/${plugin}`)).default;
        if (typeof fn === "function" && fn.length === 1) {
          this.pluginFuns.push(fn);
        }
      } else {
        if (typeof plugin.name === "string") {
          const pfn = (await import(`./plugins/${plugin}`)).default;
          if (typeof pfn === "function" && pfn.length === 1) {
            const fn = pfn(plugin.options);
            if (typeof fn === "function" && fn.length === 1) {
              this.pluginFuns.push(fn);
            }
          }
        } else {
          throw new Error("load plugin error, please check the plugin name");
        }
      }
    }
  }

  public async render(show?: boolean) {
    if (!show) {
      DevPanel.hide();
    }
    await this.loadPlugins();
    render(
      () => <App content={this.content} plugins={this.pluginFuns} />,
      DevPanel.element
    );
    this.pluginFuns.forEach((fn) => fn.call(this, DevPanel.element));
  }

  public static show() {
    if (this.element) {
      this.element.style.display = "block";
    }
  }

  public static hide() {
    if (this.element) {
      this.element.style.display = "none";
    }
  }

  public static getItem(key: string) {
    return localStorage.getItem(`dev-panel-${key}`);
  }
}
