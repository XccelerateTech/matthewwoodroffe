const fs = require('fs');

class NoteService {
    constructor(filename) {
        this.filename = filename;
        this.note = [];
        this.listNotePromise = this.listNote();
    }

    listNote() {
        return new Promise((resolve, reject) => {
            fs.readFile(this.filename, 'utf-8', (err, data) => {
                if(err) {
                    reject(err);
                    return;
                } else if (data) {
                    this.note = JSON.parse(data);
                    resolve(this.note);
                }
            });
        })
    }

    addNote(note) {
        return new Promise((resolve, reject) => {
            (this.listNotePromise).then((data) => {
                // console.log(data);
                data.push(note);
                fs.writeFile(this.filename, JSON.stringify(data),(err)=> {
                    if(err) {
                        reject(err)
                    } else {
                        resolve();
                    }
                })
            })
        })
    }

    deleteNote(num) {
        return new Promise ((resolve, reject) => {
            this.listNotePromise.then((data) => {
                data.splice(num, 1);
                fs.writeFile('../notes.json', JSON.stringify(data), (err) => {
                    if(err) {
                        reject(err);
                        return;
                    } 
                    resolve();
                });
            })
        })
    }
}

module.exports = NoteService;

// let noteService = new NoteService('../notes.json');

// console.log(noteService.listNotePromise);

// noteService.listNotePromise.then((data)=>{
//     console.log(data);
// })
// noteService.addNote('Something 3');
// noteService.deleteNote(1);