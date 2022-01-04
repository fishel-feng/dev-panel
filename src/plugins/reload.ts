import html from 'solid-js/html';

export function reload() {
    const handleReload = () => location.reload();
    return html`<div onClick=${handleReload}>刷新</div>`;
}
