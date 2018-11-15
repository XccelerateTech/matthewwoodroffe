const fs = require('fs');

class NoteService {
    constructor(filename) {
        this.filename = filename;
        this.note = [];
        this.listNotePromise = this.listNote();
    }

    listNote() {
        return new Promise( (resolve, reject) => {
            fs.readFile(this.filename, 'utf-8', (err, data) => {
                if(err) {
                    reject(err);
                    return;
                } else {
                    this.note = JSON.parse(data);
                    resolve (this.note);
                }
            })
        })
    }

    addNote(note) {
        return new Promise( (resolve, reject) => {
            this.listNotePromise.then(() => {
                this.note.push(note);
                fs.writeFile(this.filename, JSON.stringify(this.note), (err) => {
                if(err) {
                    reject(err);
                    return;
                } 
                resolve();
                });
            })
        })
    }
};

module.exports= NoteService;