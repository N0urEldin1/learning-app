// import { render404 } from "../pages/404.js";

import { newNotesPage } from "../pages/notes-page.js";

export const route = (e) => {
    e = Event || window.Event;
    e.preventDefault;
    window.history.pushState({}, "", e.currentTarget.href);
    handleLocation();
};

const routes = {
    // 404: render404,
    "/": "/pages/index.html",
    "/about": "/pages/about.html",
    "/lorem": "/pages/lorem.html",
    "/note": newNotesPage
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const renderPage = routes[path] || render404;

    new renderPage()
    // const html = await fetch(route).then((data) => data.text());
    // document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();