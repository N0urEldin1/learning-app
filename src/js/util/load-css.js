export default function loadCSS(url, obj) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = url;
        
        obj.appendChild(link);
}
