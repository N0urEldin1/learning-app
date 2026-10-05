const indexedDB = 
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB ||
    window.shimIndexedDB;

const openRequest = indexedDB.open("NotesDataBase", 1);

openRequest.onerror = (event) => {
    console.log("An error occurred with IndexedDB");
    console.log(event);
};

openRequest.onupgradeneeded = () => {
    const db = openRequest.result;
    db.createObjectStore("notes", {keyPath: "note_id"});
}

