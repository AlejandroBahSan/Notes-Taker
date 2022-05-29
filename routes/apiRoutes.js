// === Dependencies ===

const fs = require("fs");

// === Imported 'uuid' npm package to generate a unique id for each note ===
const { v4: uuidv4 } = require('uuid');

// === Api Route ===
module.exports = function (apiRoutes) {

    apiRoutes.get("/api/notes", (request, response) => {
        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        response.json(data);
    });

    apiRoutes.post("/api/notes", (request, response) => { 
        const newNotes = request.body;
        console.log(`A new note titled ${request.body.title} has been added`)
        newNotes.id = uuidv4();

        // === Data base  ===
        let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        notes.push(newNotes);
        fs.writeFileSync('./db/db.json', JSON.stringify(notes));

        response.json(notes);
    });

    apiRoutes.delete("/api/notes/:id", (request, response) => {
        let uniqueId = request.params.id.toString();
        let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        const newNotes = notes.filter(note => note.id.toString() !== uniqueId);
        fs.writeFileSync('./db/db.json', JSON.stringify(newNotes));
        response.json(newNotes);
        console.log(`A note id number ${uniqueId} has been deleted`)
    });
};
