import { page404 } from "../pages/404.js";
import { newNotesPage } from "../pages/notes-page.js";

export const route = (e) => {
    e = Event || window.Event;
    e.preventDefault;
    window.history.pushState({}, "", e.currentTarget.href);
    handleLocation();
};

const routes = {
    404: page404,
    "/": "/pages/index.html",
    "/about": "/pages/about.html",
    "/lorem": "/pages/lorem.html",
    "/note": newNotesPage
};

const handleLocation = () => {
    const path = window.location.pathname;
    const renderPage = routes[path] || page404;

    new renderPage()

    const main = document.querySelector('.main')
    const fontAwesomeScript = document.createElement('script');

    fontAwesomeScript.src = "https://kit.fontawesome.com/dcafb63ef6.js"
    fontAwesomeScript.crossOrigin = "anonymous"

    main.appendChild(fontAwesomeScript)

    // const html = await fetch(route).then((data) => data.text());
    // document.getElementById("main-page").innerHTML = html;
};

window.onpopstate =  handleLocation;
window.route = route;

handleLocation();