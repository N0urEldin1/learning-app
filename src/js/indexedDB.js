import { rejects } from "node:assert";
import { resolve } from "node:dns";

const indexedDB = 
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB ||
    window.shimIndexedDB;

const openRequest = indexedDB.open("NotesDataBase", 1);

openRequest.onupgradeneeded = () => {
    const db = openRequest.result;
    db.createObjectStore("notes", {keyPath: "note_id"});
}

const dbPromise = new Promise((resolve, rejects) => {

    openRequest.onsuccess = () => {
        resolve(openRequest.result);
    };

    openRequest.onerror = (event) => {
        console.log("An error occurred with IndexedDB");
        console.log(event);
        rejects(openRequest.error)
    };
})

export default dbPromise;