import { appendIntoEl } from '../utils';

function Reload() {
    const handleReload = () => location.reload();
    return <button class='absolute top-0 right-0' onClick={handleReload}>刷新页面</button>
}

export default (el: HTMLElement) => {
    appendIntoEl('reload', Reload, el);
}
