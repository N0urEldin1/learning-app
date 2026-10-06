// import { rejects } from "node:assert";
// import { resolve } from "node:dns";

const indexedDB = 
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB ||
    window.shimIndexedDB;

let db;

const openRequest = indexedDB.open("NotesDataBase", 1);

openRequest.onupgradeneeded = () => {
    db = openRequest.result;
    const store = db.createObjectStore("notes", {keyPath: "note_id"});
    store.createIndex("topic_order", "order", {unique: true})
}

const dbPromise = new Promise((resolve, reject) => {

    openRequest.onsuccess = () => {
        console.log("Database connected successfully")

        resolve(db = openRequest.result)
    };

    openRequest.onerror = (event) => {
        console.log("An error occurred with IndexedDB");
        console.log(event);
        
        reject(openRequest.error)
    };
})

export async function getDB() {
    await dbPromise
    return db
}