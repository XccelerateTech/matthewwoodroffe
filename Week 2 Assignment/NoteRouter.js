const express = require('express');


class NoteRouter {
    constructor(noteService) {
        this.noteService = noteService;
    }

    router(){

        let router = express.Router();

        router.get('/api/notes', (req, res) => {
            return noteService.listNote()
            .then((data) => res.json(data))
            .catch((err) => res.status(500).json(err));
        });

        router.post('/', (req, res) => {
            return noteService.addNote('didItWork7?')
            .then(() => noteService.listNote())
            .then((data) => res.json(data))
            .catch((err) => res.status(500).json(err));
        });

        router.delete('/', (req, res) => {
            return noteService.deleteNote(0)
            .then(() => res.send(noteService.note))
            .then((data) => res.json(data))
            .catch((err) => res.status(500).json(err));
        });

    return router;
    }
    
};

module.exports = NoteRouter;